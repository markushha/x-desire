export type RectangleType = {
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

export type PolygonType = {
  lat: number;
  lng: number;
}[]

export function extractCoordinatesFromPolygon(polygons: Array<string[]>): PolygonType | null {
  const polygon = polygons?.[0]?.[0];
  if (!polygon) return null;

  const coords = polygon.split(' ');

  const res = convertToLatLngArray(coords);
  if (!res)  return null;

  return res;
}

function convertToLatLngArray(inputArray: string[]): PolygonType | null {
  if (!inputArray || inputArray.length % 2 !== 0) {
    return null;
  }

  const latLngArray = [];

  for (let i = 0; i < inputArray.length; i += 2) {
      const lat = parseInt(inputArray[i]);
      const lng = parseInt(inputArray[i + 1]);

      const latLngObject = { lat, lng };

      latLngArray.push(latLngObject);
  }

  return latLngArray;
}