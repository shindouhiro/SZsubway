import { useState } from 'react';

type Language = 'zh' | 'en';

const translations = {
  zh: {
    title: "深圳地铁 Subway",
    subtitle: "探索线路、站点及周边信息。",
    searchLabel: "搜索站点",
    searchPlaceholder: "输入站点名称...",
    noStations: "未找到相关站点。",
    selectLine: "选择线路",
    stations: "站点列表",
    stationDetails: "站点详情",
    toilet: "洗手间位置",
    surroundings: "周边 / 出口",
    transfer: "换乘",
    lines: "线路",
    totalStations: "站点",
    landmarks: "地标",
    service: "服务",
    serviceHours: "24h",
    close: "关闭"
  },
  en: {
    title: "Shenzhen Subway",
    subtitle: "Explore lines, stations, and surroundings.",
    searchLabel: "Search Station",
    searchPlaceholder: "Type station name...",
    noStations: "No stations found.",
    selectLine: "Select Line",
    stations: "Stations",
    stationDetails: "Station Details",
    toilet: "Toilet Location",
    surroundings: "Surroundings / Exits",
    transfer: "Transfer",
    lines: "Lines",
    totalStations: "Stations",
    landmarks: "Landmarks",
    service: "Service",
    serviceHours: "24h",
    close: "Close"
  }
};

export function useTranslation() {
  const [lang, setLang] = useState<Language>('zh');

  const t = (key: keyof typeof translations.zh) => {
    return translations[lang][key];
  };

  return { lang, setLang, t };
}
