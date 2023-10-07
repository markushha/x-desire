"use client";

import { GoogleMap, RectangleF } from '@react-google-maps/api';
import { useCoordinates } from "@/store/coordinates";
import { useEffect, useRef, useMemo } from "react";

export default function Map() {
  const coordinates = useCoordinates();

  const mapRef = useRef(null);
  const geocoder = useMemo(() => new google.maps.Geocoder(), []);

  const googleBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(50, 85),
    new google.maps.LatLng(85, 20)
  );

  const bounds = {
    north: -58,
    south: -180,
    east: 90.3323,
    west: 180
  };

  useEffect(() => {
    const map = new google.maps.Map(mapRef.current as any, {
      center: { lat: coordinates.lat, lng: coordinates.lng },
      zoom: 3,      
    });
    new google.maps.Marker({
      map: map,
      position: { lat: 0, lng: 0 },
    });
    new google.maps.Rectangle({
      map: map,
      bounds: googleBounds,
      fillColor: "red",
      fillOpacity: 0.1,
    })
  }, [geocoder, coordinates, googleBounds]);
  
  return (
    <div
      className="w-full min-h-screen"
      ref={mapRef}
    >
      <GoogleMap
        id='rectangle-map'
        mapContainerStyle={{ height: "400px", width: "100%"}}
        zoom={4}
        center={{ lat: (bounds.north + bounds.south) / 2, lng: (bounds.east + bounds.west) / 2 }}
      >
        <RectangleF
          options={{
            strokeColor: 'red',
            strokeOpacity: 0.8,
            strokeWeight: 10,
            fillColor: 'red',
            fillOpacity: 1,
            bounds: bounds,
          }}
        />
      </GoogleMap>
    </div>
  );
}
