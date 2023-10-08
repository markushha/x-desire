"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useGranula } from "@/store/granula";

function Sidebar() {
  const granula = useGranula();

  if (!granula.granula) {
    return null;
  }

  return (
    <Card className="col-span-1 w-full h-full">
      <CardHeader>
        <CardTitle>Granula Information</CardTitle>
        <CardDescription>
          Learn more details about {granula.granula?.feed.title}
        </CardDescription>
      </CardHeader>
      <CardContent className='h-[calc(100vh-100px)]'>
        <div className='max-h-full pr-6 overflow-y-scroll'>
          {granula.granula?.feed.entry[0] && Object.entries(granula.granula?.feed.entry[0]).map(([key, value]) => {
            if (typeof value === "object" && value !== null) {
              value = JSON.stringify(value); // Convert object values to string for display
            }
            return (
              <p className="flex-wrap wrap break-words w-full" key={key}>
                <span className='font-bold'>{key}</span> - {value}
              </p>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export default Sidebar;
