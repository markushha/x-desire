"use client";

import { ScrollArea } from '@/components/ui/scroll-area';

import { cn } from '@/lib/utils';

import { Input } from './ui/input';
import { Button } from './ui/button';
import SideItem from './side-item';
import { PartialGranula } from '@/store/granulas';

interface SidebarProps {
  className?: string;
  granulas: PartialGranula[] | null;
  results: number;
}

function Sidebar({ className, granulas, results }: SidebarProps) {
  return (
    <div 
      className={cn(
        'w-[400px] gap-3 flex flex-col mr-8 border-r p-2',
        className,
      )}
    >
      <div className='flex items-center justify-center mt-2 border-b pb-4'>
        <Input placeholder='Search Granules' />
        <Button
          type="submit"
          className="ml-2"
        >
          Search
        </Button>
      </div>
      <div className='flex items-center justify-center'>
        <p className='pr-2'>Total Results: </p>
        <p className='text-center font-bold'>{results}</p>
      </div>
      <ScrollArea className='h-100%'>
        {granulas?.map((granula) => (
          <SideItem granula={granula} param={{ label: granula.name, value: granula.name }} />
        ))}
      </ScrollArea>
    </div>
  )
}

export default Sidebar;
