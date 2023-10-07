"use client";

import { GoogleMap, RectangleF } from "@react-google-maps/api";
import { useCoordinates } from "@/store/coordinates";
import { useEffect, useRef, useMemo } from "react";
import { useGranula } from "@/store/granula";
import { extractCoordinatesFromBox } from "@/lib/coords";

export default function Map() {
  const coordinates = useCoordinates();
  const granula = useGranula();

  const granulaCoords = extractCoordinatesFromBox(
    granula.granula?.feed.entry[0].boxes!
  );

  const googleBounds = useMemo(() => {
    if (
      granulaCoords
    ) {
      return new google.maps.LatLngBounds(
        new google.maps.LatLng(parseInt(granulaCoords?.minLat), parseInt(granulaCoords?.maxLat)),
        new google.maps.LatLng(parseInt(granulaCoords?.minLng), parseInt(granulaCoords?.maxLng as any))
      );
    }
  }, [granulaCoords]);

  const mapRef = useRef(null);
  const geocoder = useMemo(() => new google.maps.Geocoder(), []);

  useEffect(() => {
    const map = new google.maps.Map(mapRef.current as any, {
      center: { lat: coordinates.lat, lng: coordinates.lng },
      zoom: 3,
    });
    new google.maps.Marker({
      map: map,
      position: { lat: coordinates.lat, lng: coordinates.lng },
    });
    new google.maps.Rectangle({
      map: map,
      bounds: googleBounds,
      fillColor: "red",
      fillOpacity: 0.1,
    });
  }, [geocoder, coordinates, googleBounds]);

  return (
    <div className="w-full min-h-screen" ref={mapRef}>
      <GoogleMap
        id="rectangle-map"
        mapContainerStyle={{ height: "400px", width: "100%" }}
        zoom={4}
        center={{ lat: coordinates.lat, lng: coordinates.lng }}
      />
    </div>
  );
}
