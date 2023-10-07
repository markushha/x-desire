"use client";

import { Input } from "@/components/ui/input";
import ParamLink from "@/components/ui/param-link";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { getLanLon } from "@/hooks/getLanLon";
import { useCoordinates } from "@/store/coordinates";
import { getEarthSearchAPI } from "@/api/client";
import { useSearchParams } from "next/navigation";
import { useGranula, Granula } from "@/store/granula";

const topics = [
  {
    label: "Earthquakes",
    value: "earthquakes",
  },
  {
    label: "Tsunamis",
    value: "tsunamis",
  },
  {
    label: "Atmosphere",
    value: "atmoshpere",
  },
];

export default function Filters({ topic }: { topic: string }) {
  const coordinates = useCoordinates();
  const granula = useGranula();

  const params = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const [location, setLocation] = useState("");
  const [results, setResults] = useState<{ lat: number; lng: number }>();

  const onLocationSubmit = () => {
    if (!location.trim()) {
      return;
    }

    setIsLoading(true);
    getLanLon(location)
      .then((res) => {
        setResults(res as any);
        coordinates.setCoordinates(res.lat, res.lng);
      })
      .finally(() => setIsLoading(false));
    setLocation("");
  };

  const fetchGranula = async () => {
    const currentTopic = topic ?? params.get("topic");

    if (currentTopic === "earthquakes") {
      try {
        const res = await getEarthSearchAPI<Granula>(
          "/granules.json?echo_collection_id=C179001775-SEDAC"
        );

        granula.setGranula(res.data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    fetchGranula();
  }, [params, topic]);

  useEffect(() => {
    setResults({
      lat: coordinates.lat,
      lng: coordinates.lng,
    });
  }, [coordinates]);

  return (
    <div className="flex flex-col gap-y-4">
      <div>
        <label>Filter by location</label>
        <div className="flex items-center justify-center mt-2">
          <Input
            disabled={isLoading}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Search by country, city, or region"
          />
          <Button
            disabled={isLoading}
            onClick={onLocationSubmit}
            type="submit"
            className="ml-2"
          >
            {!isLoading ? "Search" : "Loading..."}
          </Button>
        </div>
        <div className="flex gap-x-4 items-center justify-center mt-2">
          <Input
            type="number"
            placeholder="Latitude"
            onChange={(e) =>
              setResults({
                ...(results as { lng: number; lat: any }),
                lat: e.target.value as any,
              })
            }
            value={results?.lat ?? 0}
            title="Latitude"
          />
          <Input
            type="number"
            placeholder="Longitude"
            onChange={(e) =>
              setResults({
                ...(results as { lng: any; lat: number }),
                lng: e.target.value as any,
              })
            }
            value={results?.lng ?? 0}
            title="Longitude"
          />
        </div>
      </div>
      <div>
        <label>Filter by topics</label>
        <div className="flex flex-row mt-2">
          {topics.map((topic) => (
            <ParamLink className="mr-2" key={topic.value} link={topic} paramName='topic' />
          ))}
        </div>
      </div>
    </div>
  );
}
