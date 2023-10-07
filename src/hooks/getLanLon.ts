import { getLanLonAPI } from "@/api/client";

export async function getLanLon(location: string) {
  try {
    const res = await getLanLonAPI.get(`json?address=${location}`);
    const { lat, lng } = res.data.results[0].geometry.location;
    return { lat, lng };
  } catch (error) {
    return { lat: 0, lng: 0 };
  }
}
