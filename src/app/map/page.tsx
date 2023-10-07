"use client";

import React, { useRef, useCallback } from "react";
import {
  useJsApiLoader,
} from "@react-google-maps/api";
import * as Yup from "yup";
import Map from "@/components/map";

const configureSchema = Yup.object().shape({
  city: Yup.string().required("City is required"),
});

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

interface MapComponentProps {
  selectedLocation: google.maps.LatLngLiteral;
}

export default function MapComponent({ selectedLocation }: MapComponentProps) {
  const mapRef = useRef<google.maps.Map>();
  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLEMAP_KEY!,
  });

  return (
    <div style={{ marginTop: "50px" }}>
      {isLoaded && <Map />}
    </div>
  );
}
