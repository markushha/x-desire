"use client";

import { GoogleMap, RectangleF } from "@react-google-maps/api";
import { useCoordinates } from "@/store/coordinates";
import { useEffect, useRef, useMemo } from "react";
import { useGranula } from "@/store/granula";
import { PolygonType, RectangleType, extractCoordinatesFromBox, extractCoordinatesFromPolygon } from "@/lib/coords";

export default function Map() {
  const coordinates = useCoordinates();
  const granula = useGranula();
  const isBox = granula.granula?.feed.entry[0].boxes ? true : false;

  const granulaCoords = isBox ? extractCoordinatesFromBox(
    granula.granula?.feed.entry[0].boxes!
  ) : extractCoordinatesFromPolygon(
    granula.granula?.feed.entry[0].polygons!
  )

  const googleBounds = useMemo(() => {
    if (
      granulaCoords && isBox
    ) {
      const coords = granulaCoords as RectangleType;
      return new google.maps.LatLngBounds(
        new google.maps.LatLng(parseInt(coords?.minLat), parseInt(coords?.maxLat)),
        new google.maps.LatLng(parseInt(coords?.minLng), parseInt(coords?.maxLng as any))
      );
    }
  }, [granulaCoords, isBox]);

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
    if (isBox) {
      new google.maps.Rectangle({
        map: map,
        bounds: googleBounds as google.maps.LatLngBounds,
        fillColor: "red",
        fillOpacity: 0.1,
      });
    } else {
      new google.maps.Polygon({
        map: map,
        paths: granulaCoords as PolygonType,
        fillColor: "red",
        fillOpacity: 0.1,
      })      
    }
  }, [geocoder, coordinates, googleBounds, granulaCoords, isBox]);

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
