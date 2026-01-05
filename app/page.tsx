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
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-sm border border-zinc-200 dark:border-zinc-800 flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {t('title')}
              </h1>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                {t('subtitle')}
              </p>
            </div>
            <button
              onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
              className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-xs font-semibold hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
            >
              {lang === 'zh' ? 'EN' : '中文'}
            </button>
          </div>

          {/* Search */}
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-sm border border-zinc-200 dark:border-zinc-800">
            <label className="block text-sm font-medium text-zinc-500 mb-2">
              {t('searchLabel')}
            </label>
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              className="w-full bg-zinc-100 dark:bg-zinc-950 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSelectedLineId(null);
                setSelectedStationId(null);
              }}
            />
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
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-sm border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-lg font-semibold mb-4">{t('selectLine')}</h2>
            <div className="flex flex-wrap gap-2">
              {subwayData.map((line) => (
                <button
                  key={line.id}
                  onClick={() => {
                    setSelectedLineId(line.id);
                    setSelectedStationId(null);
                  }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all transform active:scale-95 ${selectedLineId === line.id
                    ? "text-white shadow-lg ring-2 ring-offset-2 dark:ring-offset-black"
                    : "bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300"
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
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-sm border border-zinc-200 dark:border-zinc-800 flex-1 overflow-hidden flex flex-col min-h-[200px]">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: selectedLine.color }}
                />
                {t('stations')}
              </h2>
              <div className="overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                {selectedLine.stations.map((station) => (
                  <button
                    key={station.id}
                    onClick={() => setSelectedStationId(station.id)}
                    className="w-full text-left p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors flex items-center justify-between group"
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
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-sm border border-zinc-200 dark:border-zinc-800 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold">{selectedStation.name[lang]}</h2>
                  <p className="text-sm text-zinc-500">{t('stationDetails')}</p>
                </div>
                <button
                  onClick={() => setSelectedStationId(null)}
                  className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                {/* Toilet Info */}
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800/50">
                  <div className="flex items-center gap-2 mb-2 text-blue-700 dark:text-blue-300 font-semibold">
                    <span className="text-lg">🚻</span> {t('toilet')}
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300">
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
          <div className="h-[400px] lg:h-[600px] w-full">
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
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center">
              <div className="text-3xl font-bold text-zinc-900 dark:text-white">
                {subwayData.length}
              </div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">
                {t('lines')}
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center">
              <div className="text-3xl font-bold text-zinc-900 dark:text-white">
                {subwayData.reduce((acc, line) => acc + line.stations.length, 0)}
              </div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">
                {t('totalStations')}
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center">
              <div className="text-3xl font-bold text-zinc-900 dark:text-white">
                8+
              </div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">
                {t('landmarks')}
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center">
              <div className="text-3xl font-bold text-zinc-900 dark:text-white">
                {t('serviceHours')}
              </div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">
                {t('service')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
