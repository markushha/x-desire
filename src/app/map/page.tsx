import { Separator } from "@/components/ui/separator";

import MapComponent from "@/components/map";
import PageDescription from "@/components/page-description";
import Filters from "@/components/filters";

export default function MapPage({ params }: { params: { topic: string } }) {
  const topic = params['topic'] ?? null;

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="w-full my-8 flex flex-col px-4 md:px-8">
        <PageDescription
          className="w-full md:w-1/2"
          title="X-Desire Map: Access Geological Data"
          description="Search geological information using related topics by any location or coordinates. We use NASA Earthdata Search for accessing data."
        />
        <div className="flex flex-col w-full mt-8">
          <label className="text-xl md:text-2xl font-semibold">Search</label>
          <Separator className="my-4" />
          <Filters topic={topic} />
        </div>
      </div>
      <MapComponent />
    </div>
  );
}
