"use client";

import { ScrollArea } from "@/components/ui/scroll-area";

import { cn } from "@/lib/utils";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import SideItem from "./side-item";
import { PartialGranula } from "@/store/granulas";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useGranula } from "@/store/granula";

type SidebarItem = {
  label: string;
  value: string;
};

type SidebarSection = {
  label: string;
  paramName: string;
  type: "radio" | "checkbox";
  items: SidebarItem[];
};

const sideItems: SidebarSection[] = [
  {
    label: "Specialty",
    type: "checkbox",
    paramName: "specialty",
    items: [
      { label: "Sales", value: "sales" },
      { label: "Marketing", value: "marketing" },
      { label: "Designer", value: "designer" },
      { label: "Consultant", value: "consultant" },
      { label: "Teacher", value: "teacher" },
    ],
  },
  {
    label: "Education",
    type: "checkbox",
    paramName: "education",
    items: [
      { label: "Doesn't matter", value: "not_matter" },
      { label: "Higher", value: "higher" },
      { label: "Secondary", value: "secondary" },
    ],
  },
  {
    label: "Salary",
    type: "radio",
    paramName: "salary",
    items: [
      { label: "Doesn't matter", value: "not_matter" },
      { label: "From 100.000 KZT", value: "100000" },
      { label: "From 150.000 KZT", value: "150000" },
    ],
  },
  {
    label: "Country",
    type: "radio",
    paramName: "country",
    items: [
      { label: "Doesn't matter", value: "not_matter" },
      { label: "Kazakhstan", value: "kz" },
      { label: "Russia", value: "ru" },
      { label: "Ukraine", value: "ua" },
    ],
  },
];

interface SidebarProps {
  className?: string;
  granulas: PartialGranula[] | null;
  results: number;
}

function Sidebar({ className, granulas, results }: SidebarProps) {
  const granula = useGranula();

  // return (
  //   <div
  //     className={cn(
  //       'w-full col-span-1 rounded-lg gap-3 flex flex-col mr-8 p-3 border border-secondary',
  //       className,
  //     )}
  //   >
  //     {/* <div className='flex items-center justify-center mt-2 border-b pb-4'>
  //       <Input placeholder='Search Granules' />
  //       <Button
  //         type="submit"
  //         className="ml-2"
  //       >
  //         Search
  //       </Button>
  //     </div>
  //     <div className='flex items-center justify-center'>
  //       <p className='pr-2'>Total Results: </p>
  //       <p className='text-center font-bold'>{results}</p>
  //     </div>
  //     <ScrollArea className='h-100%'>
  //       {granulas?.map((granula) => (
  //         <SideItem key={granula.id} granula={granula} param={{ label: granula.name, value: granula.name }} />
  //       ))}
  //     </ScrollArea> */}
  //     <p className='text-lg md:text-xl font-medium'>Selected Granula</p>
  //   </div>
  // )

  return (
    <Card className="col-span-1 w-full">
      <CardHeader>
        <CardTitle>Granula Information</CardTitle>
        <CardDescription>
          Learn more details about {granula.granula?.feed.title}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* {Object.entries(granula.granula?.feed.entry[0]).map(([key, value]) => {
          if (typeof value === "object" && value !== null) {
            value = JSON.stringify(value); // Convert object values to string for display
          }
          return (
            <p className="flex-wrap wrap break-words" key={key}>
              {key} - {value}
            </p>
          );
        })} */}
      </CardContent>
    </Card>
  );
}

export default Sidebar;
