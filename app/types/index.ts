export interface Station {
  id: string;
  name: {
    zh: string;
    en: string;
  };
  toilet: {
    zh: string;
    en: string;
  };
  surroundings: {
    zh: string[];
    en: string[];
  };
  transfer?: string[]; // Line IDs
  x?: number;
  y?: number;
}

export interface Line {
  id: string;
  name: {
    zh: string;
    en: string;
  };
  color: string;
  stations: Station[];
}

