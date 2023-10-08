import Link from "next/link";

import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";

import { headers } from "next/headers";

const routes = [
  {
    label: "Map",
    path: "/map",
  },
];

export default function Navbar() {
  const headersList = headers();
  const domain = headersList.get("host") || "";
  const fullUrl = headersList.get("referer") || "";
  
  return (
    <div className="z-10 backdrop-blur-lg w-full fixed top-0 flex items-center border-b border-secondary bg-transparent px-4 md:px-8 py-4">
      <div className="mr-auto flex items-center">
        <Link
          href="/"
          className="font-semibold items-center flex text-xl md:text-2xl"
        >
          X-Desire
        </Link>
        <div className="ml-4 flex items-center text-sm">
          {routes.map((route) => (
            <Link
              className={cn("text-primary/60 hover:text-primary", fullUrl.split(domain)[1] === route.path && "text-primary")}
              href={route.path}
              key={route.path}
            >
              {route.label}
            </Link>
          ))}
        </div>
      </div>
      {/* <ModeToggle className="ml-auto" /> */}
    </div>
  );
}
