"use client";

import { useGranula } from "@/store/granula";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from 'next/link';

type SidebarItem = {
  label: string;
  path: string;
};

const items: SidebarItem[] = [
  {
    label: 'Get Started',
    path: '/docs/#docs-start',
  },
  {
    label: 'Introduction',
    path: '/docs/#docs-intro',
  },
  {
    label: 'Granule',
    path: '/docs/#docs-granula',
  },
  {
    label: 'Key Features',
    path: '/docs/#docs-features',
  },
  {
    label: 'Our Vision',
    path: '/docs/#docs-vision',
  },
]

function DocsSidebar() {
  return (
    <Card className="col-span-1 bg-transparent w-[300px] min-h-full">
      <CardHeader>
        <CardTitle>X-Desire Docs</CardTitle>
      </CardHeader>
      <CardContent className=''>
        <div className='max-h-full'>
          <ul>
            {items.map((item) => (
              <li className='w-full my-5 text-base md:text-lg text-primary font-medium hover:text-primary/70' key={item.label}>
                <Link href={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

export default DocsSidebar;
