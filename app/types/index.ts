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
  toilets?: {
    location: { zh: string; en: string };
    exit: string;
  }[];
  exits?: {
    id: string; // "A", "B", "C", etc.
    x: number; // Relative offset X from station center
    y: number; // Relative offset Y from station center
  }[];
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

