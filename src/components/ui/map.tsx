"use client";

import { GoogleMap } from "@react-google-maps/api";
import { useCoordinates } from "@/store/coordinates";
import { useEffect, useRef, useMemo } from "react";
import { useGranula } from "@/store/granula";
import { PolygonType, RectangleType, extractCoordinatesFromBox, getCenter, extractCoordinatesFromPolygon } from "@/lib/coords";

export default function Map() {
  const coordinates = useCoordinates();
  
  const granula = useGranula();
  const isBox = granula.granula?.feed.entry[0].boxes ? true : false;

  const granulaCoords = isBox ? extractCoordinatesFromBox(
    granula.granula?.feed.entry[0].boxes!
  ) : extractCoordinatesFromPolygon(
    granula.granula?.feed.entry[0].polygons!
  )

  const center = useMemo(() => {
    if (granulaCoords) {
      return getCenter(granulaCoords, isBox);
    } else {
      return {
        lat: 45,
        lng: 55,
      }
    }
  }, [granulaCoords, isBox]);

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
      center: center,
      zoom: 3,
    });

    if (isBox) {
      new google.maps.Rectangle({
        map: map,
        bounds: googleBounds as google.maps.LatLngBounds as google.maps.LatLngBounds,
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
  // eslint-disable-next-line
  }, [mapRef, isBox]);

  return (
    <div className="w-full min-h-screen col-span-3" ref={mapRef}>
      <GoogleMap
        id="rectangle-map"
        mapContainerStyle={{ height: "400px", width: "100%" }}
        zoom={4}
        center={{ lat: coordinates.lat, lng: coordinates.lng }}
      />
    </div>
  );
}