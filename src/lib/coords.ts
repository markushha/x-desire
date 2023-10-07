type RectangleType = {
  maxLng: string;
  minLng: string;
  maxLat: string;
  minLat: string;
}

export function extractCoordinatesFromBox(boxes: string[]): RectangleType | null {
  const box = boxes?.[0];
  if (!box) return null;

  const coords = box.split(' ');

  return {
    minLat: coords[0],
    minLng: coords[1],
    maxLat: coords[2],
    maxLng: coords[3],
  }
}