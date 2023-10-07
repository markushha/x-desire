"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  useLoadScript,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Map from "@/components/map";

const REACT_APP_GOOGLE_MAPS_KEY = "AIzaSyASO95vCcQNQrzr0lERusMhR62QUjEMxB0";

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
    googleMapsApiKey: REACT_APP_GOOGLE_MAPS_KEY,
  });

  return (
    <div style={{ marginTop: "50px" }}>
      {isLoaded && <Map />}
    </div>
  );
}
