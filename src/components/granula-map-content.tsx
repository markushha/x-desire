'use client';

import { cn } from '@/lib/utils';
import Sidebar from './sidebar';
import MapComponent from './map';
import { useGranula } from '@/store/granula';
import { Sheet, SheetTrigger, SheetContent } from './ui/sheet';
import { Button } from './ui/button';

export function GranulaMapContent() {
  const { granula } = useGranula();

  return (
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
  )
}