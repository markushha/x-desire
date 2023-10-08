"use client";

import { useJsApiLoader } from "@react-google-maps/api";
import { Loader2 } from 'lucide-react';

import Map from "@/components/ui/map";

export default function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLEMAP_KEY!,
  });

  return isLoaded ? <Map /> : (
    <div className='h-[480px] w-full flex justify-center items-center'>
      <Loader2 className='h-10 w-10 animate-spin' />
    </div>
  );
}
