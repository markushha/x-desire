"use client";

import { Input } from "@/components/ui/input";
import ParamLink from "@/components/ui/param-link";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { getLanLon } from "@/hooks/getLanLon";

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

export default function Filters() {
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);

  const [location, setLocation] = useState("");
  const [results, setResults] = useState<{ lat: number; lng: number }>();

  const onLocationSubmit = () => {
    if (!location.trim()) {
      // return setError("Please enter a location");
      return;
    }

    setIsLoading(true);
    getLanLon(location)
      .then((res) => setResults(res as any))
      .finally(() => setIsLoading(false));
    setLocation("");
  };

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
            value={results?.lat}
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
            value={results?.lng}
            title="Longitude"
          />
        </div>
      </div>
      <div>
        <label>Filter by topics</label>
        <div className="flex flex-row mt-2">
          {topics.map((topic) => (
            <ParamLink className="mr-2" key={topic.value} link={topic} />
          ))}
        </div>
      </div>
    </div>
  );
}
