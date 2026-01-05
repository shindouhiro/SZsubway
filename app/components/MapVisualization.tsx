import { useState, useRef, useEffect } from "react";
import { Line, Station } from "../types";

export function MapVisualization({
  data,
  selectedLine,
  selectedStation,
  onStationClick,
  lang = 'zh',
  t,
}: {
  data: Line[];
  selectedLine: Line | null;
  selectedStation: Station | null;
  onStationClick: (station: Station) => void;
  lang?: 'zh' | 'en';
  t: (key: any) => string;
}) {
  const [transform, setTransform] = useState({ x: 0, y: 0, k: 1 });
  const [isDragging, setIsDragging] = useState(false);
  const [tooltipStation, setTooltipStation] = useState<Station | null>(null);
  const startPan = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Center view on mount
  useEffect(() => {
    // Initial center can be improved, currently just resets
    // Could calculate bounding box of stations if needed
  }, []);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const scaleAmount = -e.deltaY * 0.001;
    const newScale = Math.min(Math.max(0.5, transform.k + scaleAmount), 5);

    // Zoom towards center for simplicity (improving to mouse-point zoom requires more math)
    setTransform(prev => ({
      ...prev,
      k: newScale
    }));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startPan.current = { x: e.clientX - transform.x, y: e.clientY - transform.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setTransform(prev => ({
      ...prev,
      x: e.clientX - startPan.current.x,
      y: e.clientY - startPan.current.y
    }));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Zoom controls
  const zoomIn = () => setTransform(prev => ({ ...prev, k: Math.min(prev.k * 1.2, 5) }));
  const zoomOut = () => setTransform(prev => ({ ...prev, k: Math.max(prev.k / 1.2, 0.5) }));
  const resetZoom = () => setTransform({ x: 0, y: 0, k: 1 });

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-inner border border-zinc-200 dark:border-zinc-800 cursor-move"
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <span className="text-9xl font-bold tracking-tighter text-zinc-500">
          SHENZHEN
        </span>
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2 z-10">
        <button onClick={zoomIn} className="p-2 bg-white dark:bg-zinc-800 rounded-lg shadow-md hover:bg-zinc-100 dark:hover:bg-zinc-700 font-bold w-10 h-10 flex items-center justify-center">+</button>
        <button onClick={zoomOut} className="p-2 bg-white dark:bg-zinc-800 rounded-lg shadow-md hover:bg-zinc-100 dark:hover:bg-zinc-700 font-bold w-10 h-10 flex items-center justify-center">-</button>
        <button onClick={resetZoom} className="p-2 bg-white dark:bg-zinc-800 rounded-lg shadow-md hover:bg-zinc-100 dark:hover:bg-zinc-700 font-bold w-auto px-3 text-xs">Reset</button>
      </div>

      <svg className="w-full h-full" viewBox="0 0 1000 800" preserveAspectRatio="xMidYMid meet">
        <g transform={`translate(${transform.x},${transform.y}) scale(${transform.k})`}>
          {data.map((line) => (
            <g key={line.id}>
              {/* Connection Lines */}
              <path
                d={`M ${line.stations
                  .map((s) => `${s.x},${s.y}`)
                  .join(" L ")}`}
                fill="none"
                stroke={line.color}
                strokeWidth={(selectedLine?.id === line.id ? 8 : 4) / transform.k} // Adjust stroke width inversely to scale to keep it visible but not huge
                strokeOpacity={
                  selectedLine && selectedLine.id !== line.id ? 0.3 : 1
                }
                strokeLinecap="round"
                className="transition-all duration-300"
              />

              {/* Stations */}
              {line.stations.map((station) => (
                <g
                  key={station.id}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent drag start when clicking station
                    onStationClick(station);
                  }}
                  className="cursor-pointer group"
                >
                  <circle
                    cx={station.x}
                    cy={station.y}
                    r={(selectedStation?.id === station.id ? 10 : 6) / Math.sqrt(transform.k)} // Adjust radius slightly
                    fill="white"
                    stroke={line.color}
                    strokeWidth={3 / transform.k}
                    className={`transition-all duration-300 ${selectedLine &&
                      selectedLine.id !== line.id &&
                      selectedStation?.id !== station.id
                      ? "opacity-30"
                      : "opacity-100"
                      }`}
                  />
                  {/* Tooltip-like label on hover or select */}
                  <text
                    x={station.x}
                    y={(station.y || 0) - (15 / transform.k)}
                    textAnchor="middle"
                    style={{ fontSize: `${12 / transform.k}px` }} // Scale text
                    className={`font-bold fill-zinc-700 dark:fill-zinc-300 transition-opacity duration-200 ${selectedStation?.id === station.id || transform.k > 1.2
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                      }`}
                  >
                    {station.name[lang]}
                    {station.toilet.zh !== "暂无信息" && station.toilet.en !== "Info Unavailable" && (
                      <tspan
                        className="cursor-help"
                        dx="2"
                        dy="0"
                        fontSize={`${10 / transform.k}px`}
                        onMouseEnter={() => setTooltipStation(station)}
                        onMouseLeave={() => setTooltipStation(null)}
                      >
                        🚻
                      </tspan>
                    )}
                  </text>
                </g>
              ))}
            </g>
          ))}

          {/* Toilet Locations (based on Exits) */}
          {selectedStation && selectedStation.toilets && selectedStation.exits && (
            <g transform={`translate(${selectedStation.x || 0}, ${selectedStation.y || 0})`}>
              {selectedStation.toilets.map((toilet, idx) => {
                const exit = selectedStation.exits?.find(e => e.id === toilet.exit);
                if (!exit) return null;
                return (
                  <g key={idx} transform={`translate(${exit.x / Math.sqrt(transform.k)}, ${exit.y / Math.sqrt(transform.k)})`}>
                    <rect
                      x={-14 / Math.sqrt(transform.k)}
                      y={-10 / Math.sqrt(transform.k)}
                      width={28 / Math.sqrt(transform.k)}
                      height={20 / Math.sqrt(transform.k)}
                      rx={4 / Math.sqrt(transform.k)}
                      className="fill-blue-600 shadow-sm" // Highlight color for toilet
                    />
                    <text
                      x="0"
                      y={4 / Math.sqrt(transform.k)}
                      textAnchor="middle"
                      className="fill-white font-bold"
                      fontSize={`${10 / Math.sqrt(transform.k)}px`}
                    >
                      🚻 {exit.id}
                    </text>
                  </g>
                );
              })}
            </g>
          )}
        </g>
      </svg>

      {/* Custom Tooltip */}
      {tooltipStation && (
        <div
          className="absolute z-50 pointer-events-none bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-xs px-3 py-2 rounded-lg shadow-xl border border-zinc-200 dark:border-zinc-700 whitespace-nowrap transition-opacity duration-200 animate-in fade-in zoom-in-95"
          style={{
            left: (tooltipStation.x || 0) * transform.k + transform.x,
            top: ((tooltipStation.y || 0) * transform.k + transform.y) - 10,
            transform: 'translate(-50%, -100%)'
          }}
        >
          <div className="font-bold mb-1 flex items-center gap-1 border-b border-zinc-200 dark:border-zinc-700 pb-1">
            <span>🚻</span>
            {tooltipStation.toilets && tooltipStation.toilets.length > 0 ? (
              <span>{t('toilet')} ({tooltipStation.toilets.length})</span>
            ) : (
              <span>{t('toilet')}</span>
            )}
          </div>

          {tooltipStation.toilets && tooltipStation.toilets.length > 0 ? (
            <div className="flex flex-col gap-1">
              {tooltipStation.toilets.map((toilet, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-medium">{toilet.location[lang]}</span>
                  {toilet.exit && toilet.exit !== "—" && (
                    <span className="text-[10px] text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-700 px-1 py-0.5 rounded w-fit">
                      Exit {toilet.exit}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="opacity-90">{tooltipStation.toilet[lang]}</div>
          )}
          {/* Arrow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white dark:border-t-zinc-800"></div>
        </div>
      )}
    </div>
  );
}
