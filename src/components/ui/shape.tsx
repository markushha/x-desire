import { PolygonType, RectangleType } from '@/lib/coords';

interface ShapeProps {
  shape: PolygonType | RectangleType | null;
}

export function Shape({ shape }: ShapeProps) {
  if (!shape) {
    return <span>N/A</span>
  }

  if (shape && Array.isArray(shape)) {
    const polygon = shape as PolygonType;

    return (
      <div className='flex flex-col gap-2 pl-6'>
        {polygon.map((coords, index) => (
          <div key={coords.lng} className='flex gap-1'>
            <span>Point {index + 1}:{' '}</span>
            <span>Latitude - {coords.lat}{' '}</span>
            <span>Longtitude - {coords.lng}</span>
          </div>
        ))}
      </div>
    )
  } else {
    const box = shape as RectangleType;

    return (
      <div className='flex flex-col gap-2 pl-6'>
        <span>West: {box.minLat}{' '}</span>
        <span>East: {box.minLng}{' '}</span>
        <span>South: {box.maxLat}{' '}</span>
        <span>North: {box.maxLng}</span>
      </div>
    )
  }
}