import { create } from 'zustand'

type Link = {
  inherited: boolean;
  rel: string;
  hreflang: string;
  href: string;
}

type Entry = {
  boxes: string[];
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
