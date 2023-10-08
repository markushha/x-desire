'use client';

import { extractCoordinatesFromBox, extractCoordinatesFromPolygon } from '@/lib/coords';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { Shape } from './ui/shape';
import { useGranula } from '@/store/granula'

export function GranulaDescriptionList({ className }: { className: string }) {
  const { granula } = useGranula();
  
  if (!granula) {
    return null;
  }
  const isBox = Boolean(granula?.feed.entry?.[0].boxes);

  const coords = isBox ? extractCoordinatesFromBox(
    granula?.feed.entry?.[0].boxes!
  ) : extractCoordinatesFromPolygon(
    granula?.feed.entry?.[0].polygons!
  );
  const timeStart = granula?.feed.entry?.[0].time_start ?? 'N/A';
  const timeEnd = granula?.feed.entry?.[0].time_end ?? 'N/A';
  const updated = granula?.feed.entry?.[0].updated ?? 'N/A';
  const dataCenter = granula?.feed.entry?.[0].data_center ?? 'N/A';
  const dayNightFlag = granula?.feed.entry?.[0].day_night_flag ?? 'N/A';
  const originalFormat = granula?.feed.entry?.[0].original_format ?? 'N/A';
  const granuleSize = granula?.feed.entry?.[0].granule_size ?? 'N/A';
  const coordinateSystem = granula?.feed.entry?.[0].coordinate_system ?? 'N/A';
  
  return (
    <div className='flex flex-wrap gap-6'>
      <Separator className="my-4" />
      <Card className={className}>
        <CardHeader>
          <CardTitle>Granule Timestamp:</CardTitle>
          <CardDescription className='flex flex-col gap-2'>
            <span>
              <span className='font-bold'>Tracking started: </span>
              {timeStart}
            </span>
            <span>
              <span className='font-bold'>Tracking ended: </span>
              {timeEnd}
            </span>
            <span>
              <span className='font-bold'>Last update: </span>
              {updated}
            </span>
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className={className}>
        <CardHeader>
          <CardTitle>General Info:</CardTitle>
          <CardDescription className='flex flex-col gap-2'>
            <span>
              <span className='font-bold'>Granule side: </span>
              {granuleSize}
            </span>
            <span>
              <span className='font-bold'>Original format: </span>
              {originalFormat}
            </span>
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className={className}>
        <CardHeader>
          <CardTitle>Research Info:</CardTitle>
          <CardDescription className='flex flex-col gap-2'>
            <span>
              <span className='font-bold'>Data center: </span>
              {dataCenter}
            </span>
            <span>
              <span className='font-bold'>Day night format: </span>
              <span className='capitalize'>{dayNightFlag}</span>
            </span>
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className={className}>
        <CardHeader>
          <CardTitle>Coordinates:</CardTitle>
          <CardDescription className='flex flex-col gap-2'>
            <span>
              <span className='font-bold'>Coordinates: </span>
              <Shape shape={coords} />
            </span>
            <span>
              <span className='font-bold'>Coordinates system: </span>
              <span className='capitalize'>{coordinateSystem}</span>
            </span>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}