import { create } from 'zustand'

// "polygons": [
//   [
//     "50.712543 55.659523 57.842426 8.672903 37.11097 8.719166 32.045826 41.824383 50.712543 55.659523"
//   ]
// ],

type Link = {
  inherited: boolean;
  rel: string;
  hreflang: string;
  href: string;
}

type Entry = {
  polygons?: Array<string[]>;
  boxes?: string[];
  time_start: string;
  updated: string;
  dataset_id: string;
  data_center: string;
  title: string;
  coordinate_system: string;
  day_night_flag: string;
  time_end: string;
  id: string;
  granule_size: string;
  collection_concept_id: string;
  original_format?: string;
  browse_flag?: string;
  online_access_flag?: string;
  links?: Link[];
}

export type Granula = {
  feed: {
    updated: string;
    id: string;
    title: string;
    entry: Entry[];
  }
}

type GranulaState = {
  granula: Granula | null;
  setGranula: (granula: Granula) => void;
}

export const useGranula = create<GranulaState>()((set) => ({
  granula: null,
  setGranula: (granula: Granula) => set({ granula }),
}))
