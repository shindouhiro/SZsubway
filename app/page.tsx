"use client";

import { useState, useMemo } from "react";
import { subwayData } from "./data/subway";
import { Line, Station } from "./types";
import { MapVisualization } from "./components/MapVisualization";
import { useTranslation } from "./hooks/useTranslation";

export default function Home() {
  const [selectedLineId, setSelectedLineId] = useState<string | null>(null);
  const [selectedStationId, setSelectedStationId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { lang, setLang, t } = useTranslation();

  const selectedLine = useMemo(
    () => subwayData.find((l) => l.id === selectedLineId) || null,
    [selectedLineId]
  );

  const selectedStation = useMemo(() => {
    if (selectedStationId) {
      for (const line of subwayData) {
        const s = line.stations.find((s) => s.id === selectedStationId);
        if (s) return s;
      }
    }
    return null;
  }, [selectedStationId]);

  // Search logic (searches in both languages)
  const searchResults = useMemo(() => {
    if (!searchQuery) return [];
    const results: { line: Line; station: Station }[] = [];
    const query = searchQuery.toLowerCase();
    subwayData.forEach((line) => {
      line.stations.forEach((station) => {
        if (
          station.name.zh.includes(query) ||
          station.name.en.toLowerCase().includes(query)
        ) {
          results.push({ line, station });
        }
      });
    });
    return results;
  }, [searchQuery]);

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 p-4 md:p-8 font-sans selection:bg-blue-100 dark:selection:bg-blue-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Controls & Details */}
        <div className="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1">

          {/* Header */}
          <div className="glass-card p-8 rounded-[2rem] flex justify-between items-start animate-fade-in-up" style={{ animationDelay: '0ms' }}>
            <div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-2 tracking-tight flex items-center gap-3">
                <span className="text-5xl animate-float">🚇</span>
                <span className="bg-gradient-to-r from-zinc-800 to-zinc-500 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
                  {t('title')}
                </span>
              </h1>
              <p className="text-muted-foreground text-sm font-medium tracking-wide ml-1">
                {t('subtitle')}
              </p>
            </div>
            <div className="flex flex-col gap-3 items-end">
              <button
                onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
                className="px-5 py-2 glass-card !bg-white/80 dark:!bg-black/50 text-xs font-bold hover:scale-105 active:scale-95 transition-all shadow-sm border border-black/5 dark:border-white/10 uppercase tracking-widest"
              >
                {lang === 'zh' ? 'EN' : '中文'}
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="glass-card p-8 rounded-[2rem] animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <label className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4 ml-1">
              {t('searchLabel')}
            </label>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                className="glass-input relative w-full rounded-2xl px-6 py-4 outline-none placeholder:text-muted-foreground/40 text-foreground text-lg font-medium"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedLineId(null);
                  setSelectedStationId(null);
                }}
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
                🔍
              </div>
            </div>
            {searchQuery && (
              <ul className="mt-4 space-y-2 max-h-40 overflow-y-auto custom-scrollbar">
                {searchResults.map((res) => (
                  <li
                    key={res.station.id}
                    onClick={() => {
                      setSelectedLineId(res.line.id);
                      setSelectedStationId(res.station.id);
                      setSearchQuery("");
                    }}
                    className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-xl cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors flex items-center justify-between group"
                  >
                    <span>{res.station.name[lang]}</span>
                    <span
                      className="text-xs px-2 py-1 rounded-full text-white"
                      style={{ backgroundColor: res.line.color }}
                    >
                      {res.line.name[lang]}
                    </span>
                  </li>
                ))}
                {searchResults.length === 0 && (
                  <li className="text-zinc-400 text-sm text-center py-2">
                    {t('noStations')}
                  </li>
                )}
              </ul>
            )}
          </div>

          {/* Line Selector */}
          <div className="glass-card p-8 rounded-[2rem] animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h2 className="text-xs font-bold uppercase tracking-widest mb-6 text-muted-foreground ml-1">{t('selectLine')}</h2>
            <div className="flex flex-wrap gap-3">
              {subwayData.map((line) => (
                <button
                  key={line.id}
                  onClick={() => {
                    setSelectedLineId(line.id);
                    setSelectedStationId(null);
                  }}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 transform border shadow-sm ${selectedLineId === line.id
                    ? "text-white shadow-lg ring-4 ring-offset-2 dark:ring-offset-black scale-105 border-transparent z-10"
                    : "bg-white dark:bg-zinc-800/50 hover:bg-zinc-50 dark:hover:bg-zinc-800 border-black/5 dark:border-white/5 text-muted-foreground hover:text-foreground hover:-translate-y-0.5"
                    }`}
                  style={{
                    backgroundColor:
                      selectedLineId === line.id ? line.color : undefined,
                    ["--tw-ring-color" as any]: line.color,
                  }}
                >
                  {line.name[lang]}
                </button>
              ))}
            </div>
          </div>

          {/* Station List (if line selected) */}
          {selectedLine && !selectedStation && (
            <div className="glass-card p-8 rounded-[2rem] flex-1 overflow-hidden flex flex-col min-h-[300px] animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-black/5 dark:border-white/5">
                <div
                  className="w-12 h-12 rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10 flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: selectedLine.color }}
                >
                  {selectedLine.id}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">{selectedLine.name[lang]}</h2>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{t('stations')}</p>
                </div>
              </div>
              <div className="overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                {selectedLine.stations.map((station, idx) => (
                  <button
                    key={station.id}
                    onClick={() => setSelectedStationId(station.id)}
                    className="w-full text-left p-4 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center justify-between group text-foreground border border-transparent hover:border-black/5 dark:hover:border-white/5 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 20}ms` }}
                  >
                    <span className="font-medium">{station.name[lang]}</span>
                    <div className="flex gap-1">
                      {station.transfer?.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-1.5 py-0.5 bg-zinc-200 dark:bg-zinc-700 rounded text-zinc-600 dark:text-zinc-400"
                        >
                          Line {t}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Station Detail (if station selected) */}
          {selectedStation && (
            <div className="glass-card p-8 rounded-[2rem] animate-fade-in-up duration-500">
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-black/5 dark:border-white/5">
                <div>
                  <h2 className="text-4xl font-extrabold tracking-tight text-foreground">{selectedStation.name[lang]}</h2>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-zinc-100 dark:bg-zinc-800 text-muted-foreground uppercase tracking-widest border border-black/5 dark:border-white/5">
                      Station
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedStationId(null)}
                  className="w-10 h-10 flex items-center justify-center bg-black/5 dark:bg-white/5 hover:bg-red-500/10 hover:text-red-500 rounded-full transition-colors backdrop-blur-sm"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-8">
                {/* Toilet Info */}
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl border border-blue-100 dark:border-blue-500/20 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-6xl rotate-12">
                    🚻
                  </div>
                  <div className="flex items-center gap-3 mb-3 text-blue-600 dark:text-blue-400 font-bold relative z-10">
                    <span className="text-xl p-2 bg-white/50 dark:bg-black/20 rounded-xl">🚻</span> {t('toilet')}
                  </div>
                  <p className="text-foreground/90 font-medium leading-relaxed relative z-10 pl-1">
                    {selectedStation.toilet[lang]}
                  </p>
                </div>

                {/* Surroundings */}
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <span>📍</span> {t('surroundings')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedStation.surroundings[lang].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Transfer */}
                {selectedStation.transfer && (
                  <div>
                    <h3 className="font-semibold mb-3">🔀 {t('transfer')}</h3>
                    <div className="flex gap-2">
                      {selectedStation.transfer.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 bg-zinc-900 text-white dark:bg-white dark:text-black rounded-full text-sm font-bold"
                        >
                          Line {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Map */}
        <div className="lg:col-span-8 order-1 lg:order-2">
          {/* Mobile responsive height for map */}
          <div className="h-[50vh] min-h-[400px] lg:h-[600px] w-full">
            <MapVisualization
              data={subwayData}
              selectedLine={selectedLine}
              selectedStation={selectedStation}
              onStationClick={(s) => {
                setSelectedStationId(s.id);
              }}
              lang={lang}
              t={t}
            />
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            {[
              { label: t('lines'), value: subwayData.length, icon: "🚇" },
              { label: t('totalStations'), value: subwayData.reduce((acc, line) => acc + line.stations.length, 0), icon: "🚉" },
              { label: t('landmarks'), value: "8+", icon: "🏙️" },
              { label: t('service'), value: t('serviceHours'), icon: "🕒" }
            ].map((stat, i) => (
              <div key={i} className="glass-card p-6 rounded-[2rem] text-center group hover:-translate-y-2 transition-transform duration-500 border-t border-t-white/50 dark:border-t-white/10">
                <div className="text-2xl mb-2 opacity-50 group-hover:scale-125 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0">{stat.icon}</div>
                <div className="text-2xl font-black text-foreground tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
