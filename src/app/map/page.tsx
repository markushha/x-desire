import { Separator } from "@/components/ui/separator";

import MapComponent from "@/components/map";
import PageDescription from "@/components/page-description";
import Sidebar from "@/components/sidebar";
import Filters from "@/components/filters";

const mockGranules = {
  results: {
    hits: 52823,
    took: 29,
    references: {
      reference: [
        {
          name: "'Latent reserves' within the Swiss NFI",
          id: "C1931110427-SCIOPS",
          location:
            "https://cmr.earthdata.nasa.gov:443/search/concepts/C1931110427-SCIOPS/6",
          "revision-id": 6,
        },
        {
          name: "(U-Th)/He ages from the Kukri Hills of southern Victoria Land",
          id: "C1214587974-SCIOPS",
          location:
            "https://cmr.earthdata.nasa.gov:443/search/concepts/C1214587974-SCIOPS/4",
          "revision-id": 4,
        },
        {
          name: "0.5 hour 1 M HCl extraction data for the Windmill Islands marine sediments",
          id: "C1214305813-AU_AADC",
          location:
            "https://cmr.earthdata.nasa.gov:443/search/concepts/C1214305813-AU_AADC/11",
          "revision-id": 11,
        },
        {
          name: "1-100Hz ULF/ELF Electromagnetic Wave Observation at Syowa Station",
          id: "C1214590112-SCIOPS",
          location:
            "https://cmr.earthdata.nasa.gov:443/search/concepts/C1214590112-SCIOPS/7",
          "revision-id": 7,
        },
        {
          name: "10 Days Synthesis of SPOT VEGETATION Images (VGT-S10)",
          id: "C2207472890-FEDEO",
          location:
            "https://cmr.earthdata.nasa.gov:443/search/concepts/C2207472890-FEDEO/12",
          "revision-id": 12,
        },
        {
          name: "10 m firn temperature data: LGB traverses 1990-95",
          id: "C1214313574-AU_AADC",
          location:
            "https://cmr.earthdata.nasa.gov:443/search/concepts/C1214313574-AU_AADC/10",
          "revision-id": 10,
        },
        {
          name: "10 sec GPS ground tracking data",
          id: "C1214586614-SCIOPS",
          location:
            "https://cmr.earthdata.nasa.gov:443/search/concepts/C1214586614-SCIOPS/4",
          "revision-id": 4,
        },
        {
          name: "10 year trend of levels of organochlorine pollutants in Antarctic seabirds",
          id: "C1214305884-AU_AADC",
          location:
            "https://cmr.earthdata.nasa.gov:443/search/concepts/C1214305884-AU_AADC/11",
          "revision-id": 11,
        },
        {
          name: "10-HS Pfynwald",
          id: "C1647993129-SCIOPS",
          location:
            "https://cmr.earthdata.nasa.gov:443/search/concepts/C1647993129-SCIOPS/15",
          "revision-id": 15,
        },
        {
          name: "101.1 m long horizontal blue ice core collected from Scharffenbergbotnen, DML, Antarctica, in 2003/2004",
          id: "C1214614210-SCIOPS",
          location:
            "https://cmr.earthdata.nasa.gov:443/search/concepts/C1214614210-SCIOPS/4",
          "revision-id": 4,
        },
      ],
    },
  },
};

export default function MapPage({ params }: { params: { topic: string } }) {
  const topic = params["topic"] ?? null;

  return (
    <div className="flex">
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
          <Separator className="my-8" />
          <div className="grid grid-cols-4 gap-x-2 md:gap-x-4 w-full">
            <Sidebar
              granulas={mockGranules.results.references.reference}
              results={mockGranules.results.hits}
            />
            <MapComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
