import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";

function Map() {
  const mapRef = useRef(null);
  const geocoder = useMemo(() => new google.maps.Geocoder(), []);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLEMAP_KEY!,
      version: "weekly",
    });
    loader.load().then(() => {
      const map = new google.maps.Map(mapRef.current as any, {
        center: { lat: 43.229793548583984, lng: 76.91036224365234 },
        zoom: 3,
      });
      const marker = new google.maps.Marker({
        map: map,
        position: { lat: 43.229793548583984, lng: 76.91036224365234 },
      });
    });
  }, [geocoder]);
  return <div className="w-full min-h-screen" style={{ height: "100vh" }} ref={mapRef} />;
}
export default Map;
