"use client";

import { useJsApiLoader } from "@react-google-maps/api";

import Map from "@/components/ui/map";

export default function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLEMAP_KEY!,
  });

  return isLoaded && <Map />;
}
