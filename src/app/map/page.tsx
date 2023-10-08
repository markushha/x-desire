import { Metadata } from 'next';
import { Separator } from "@/components/ui/separator";

import { GranulaMapContent } from '@/components/granula-map-content';
import PageDescription from "@/components/page-description";
import Filters from "@/components/filters";
import { GranulaDescriptionList } from '@/components/granula-description-list';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "X-Desire | Map",
  description: "X-Desire access NASA data using our interactive map",
};

export default function MapPage({ params }: { params: { topic: string } }) {
  const topic = params["topic"] ?? null;

  return (
    <div className="flex">
      <div className="w-full min-h-screen flex flex-col items-center my-16">
        <div className="w-full my-8 flex flex-col px-4 md:px-8">
          <PageDescription
            className="w-full md:w-1/2 bg-transparent"
            title="X-Desire Map: Access Geological Data"
            description="Search geological information using related topics by any location or coordinates. We use NASA Earthdata Search for accessing data."
          />
          <div className="flex flex-col w-full mt-8">
            <label className="text-xl md:text-2xl font-semibold">Search</label>
            <Separator className="my-4" />
            <Filters topic={topic} />
            <GranulaDescriptionList className='bg-transparent' />
          </div>
          <Separator className="my-8" />
          <Link href="/docs#docs-granula" className='mb-4 w-full md:w-1/2 lg:w-1/3 lg:text-base text-xs px-6 py-2 bg-primary hover:opacity-50 transition text-secondary rounded-3xl flex items-center justify-center'>Download this Granula (NASA Earth Data)</Link>
          <GranulaMapContent />
        </div>
      </div>
    </div>
  );
}
