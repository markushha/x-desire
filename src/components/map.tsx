import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const REACT_APP_GOOGLE_MAPS_KEY = "AIzaSyASO95vCcQNQrzr0lERusMhR62QUjEMxB0";

function Map() {
  const mapRef = useRef(null);
  const geocoder = useMemo(() => new google.maps.Geocoder(), []);

  useEffect(() => {
    const loader = new Loader({
      apiKey: REACT_APP_GOOGLE_MAPS_KEY,
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
