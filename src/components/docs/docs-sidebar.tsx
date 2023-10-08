"use client";

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
    <Card className="col-span-1 w-[300px] min-h-full">
      <CardHeader>
        <CardTitle>X-Desire Docs</CardTitle>
      </CardHeader>
      <CardContent className='h-[calc(100vh-100px)]'>
        <div className='max-h-full pr-6'>
          <ul>
            {items.map((item) => (
              <li className='w-full p-2 my-2 mx-2' key={item.label}>
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
