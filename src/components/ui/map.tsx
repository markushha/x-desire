"use client";

import { Rectangle, GoogleMap } from '@react-google-maps/api';
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
    north: 56.7152,
    south: 41.1279,
    east: 90.3323,
    west: 50.2105
  };

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
    >
      <GoogleMap
      id='rectangle-map'
      mapContainerStyle={{ height: "400px", width: "800px" }}
      zoom={4}
      center={{ lat: (bounds.north + bounds.south) / 2, lng: (bounds.east + bounds.west) / 2 }}
    >
      <Rectangle
        options={{
          strokeColor: 'red',
          strokeOpacity: 0.8,
          strokeWeight: 10,
          fillColor: 'red',
          fillOpacity: 1,
          bounds: googleBounds,
        }}
      />
    </GoogleMap>
    </div>
  );
}
