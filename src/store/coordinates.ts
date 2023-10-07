import { create } from 'zustand'

type Coords = {
  lat: number;
  lng: number;
  setCoordinates: (lat: number, lng: number) => void;
}

export const useCoordinates = create<Coords>()((set) => ({
  lat: 0,
  lng: 0,
  setCoordinates: (lat: number, lng: number) => set({ lat, lng }),
}))
