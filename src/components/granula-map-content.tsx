'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import Sidebar from './sidebar';
import MapComponent from './map';
import { useGranula } from '@/store/granula';
import { Sheet, SheetTrigger, SheetContent } from './ui/sheet';
import { Button } from './ui/button';

export function GranulaMapContent() {
  const { granula } = useGranula();

  console.log(granula?.feed.entry[0].links);
  return (
    <div className='w-full'>
      {granula?.feed.entry[0].links?.[0] && (
        <Link href={granula?.feed.entry[0].links?.[0].href} className='mb-4 w-full md:w-1/2 lg:w-1/3 lg:text-base text-xs px-6 py-2 bg-primary hover:opacity-50 transition text-secondary rounded-3xl flex items-center justify-center'>Download this Granula (NASA Earth Data)</Link>
      )}
      <div className={cn("gap-x-2 md:gap-x-4 w-full", granula ? 'lg:grid lg:grid-cols-4': 'flex')}>
        <div className='hidden lg:block'>
          <Sidebar />
        </div>
        <div className='lg:hidden block m-4'>
          <Sheet>
            <SheetTrigger asChild>
              <Button>
                Check full data
              </Button>
            </SheetTrigger>
            <SheetContent side='left'>
              <Sidebar />
            </SheetContent>
          </Sheet>
        </div>
        <MapComponent />
      </div>
    </div>
  )
}