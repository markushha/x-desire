"use client";

import { useCoordinates } from "@/store/coordinates";
import { useEffect, useRef, useMemo } from "react";

export default function Map() {
  const coordinates = useCoordinates();

  const mapRef = useRef(null);
  const geocoder = useMemo(() => new google.maps.Geocoder(), []);

  useEffect(() => {
    const map = new google.maps.Map(mapRef.current as any, {
      center: { lat: coordinates.lat, lng: coordinates.lng },
      zoom: 3,
    });
    // locations.forEach((location) => {
    //   new google.maps.Marker({
    //     map: map,
    //     position: { lat: location.lat, lng: location.lng },
    //   });
    // });
  }, [geocoder, coordinates]);
  return (
    <div
      className="w-full min-h-screen"
      style={{ height: "100vh" }}
      ref={mapRef}
    />
  );
}
