import { useState, useRef, useEffect } from "react";
import { Line, Station } from "../types";

export function MapVisualization({
  data,
  selectedLine,
  selectedStation,
  onStationClick,
  lang = 'zh',
}: {
  data: Line[];
  selectedLine: Line | null;
  selectedStation: Station | null;
  onStationClick: (station: Station) => void;
  lang?: 'zh' | 'en';
}) {
  const [transform, setTransform] = useState({ x: 0, y: 0, k: 1 });
  const [isDragging, setIsDragging] = useState(false);
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
                  </text>
                </g>
              ))}
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
