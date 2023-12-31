"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

import { usePathname } from "next/navigation";
import { Github } from "lucide-react";

const routes = [
  {
    label: "Map",
    path: "/map",
  },
  {
    label: "Docs",
    path: "/docs",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  
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
              className={cn("text-primary/60 hover:text-primary mx-2", pathname === route.path && "text-primary")}
              href={route.path}
              key={route.path}
            >
              {route.label}
            </Link>
          ))}
        </div>
      </div>
      {/* <ModeToggle className="ml-auto" /> */}
      <Link className="border border-secondary bg-slate-950 flex p-2 cursor-pointer rounded-lg hover:opacity-50 transition" href='https://github.com/markushha/x-desire' target="_blank">
        <Github className='w-6 h-6 mr-2' />
        GitHub
      </Link>
    </div>
  );
}
