"use client";

import { ScrollArea } from '@/components/ui/scroll-area';

import { cn } from '@/lib/utils';

import { Input } from './ui/input';
import { Button } from './ui/button';
import SideItem from './side-item';
import { PartialGranula } from '@/store/granulas';

type SidebarItem = {
  label: string
  value: string
}

type SidebarSection = {
  label: string
  paramName: string
  type: 'radio' | 'checkbox'
  items: SidebarItem[]
}

const sideItems: SidebarSection[] = [
  {
    label: 'Specialty',
    type: 'checkbox',
    paramName: 'specialty',
    items: [
      { label: 'Sales', value: 'sales', },
      { label: 'Marketing', value: 'marketing', },
      { label: 'Designer', value: 'designer', },
      { label: 'Consultant', value: 'consultant', },
      { label: 'Teacher', value: 'teacher', },
    ],
  },
  {
    label: 'Education',
    type: 'checkbox',
    paramName: 'education',
    items: [
      { label: "Doesn't matter", value: 'not_matter', },
      { label: 'Higher', value: 'higher', },
      { label: 'Secondary', value: 'secondary', },
    ],
  },
  {
    label: 'Salary',
    type: 'radio',
    paramName: 'salary',
    items: [
      { label: "Doesn't matter", value: 'not_matter', },
      { label: 'From 100.000 KZT', value: '100000', },
      { label: 'From 150.000 KZT', value: '150000', },
    ],
  },
  {
    label: 'Country',
    type: 'radio',
    paramName: 'country',
    items: [
      { label: "Doesn't matter", value: 'not_matter', },
      { label: 'Kazakhstan', value: 'kz', },
      { label: 'Russia', value: 'ru', },
      { label: 'Ukraine', value: 'ua', },
    ],
  },
]

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
