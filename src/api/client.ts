import axios from "axios";

/* 
  For this project we selected to use axios inspite 
  of RTK Query because we wanted to have more control 
  over the API calls and the data that we are getting back from the API.

  As long as caching is not a usecase for dynamic data, we can use axios.
*/

/* this API endpoint will be used to recieve the data from NASA Earth Data */

/* this API endpoint will be used to get lan & lon out of location */

export const getLanLonAPI = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api/geocode/",
  params: {
    key: process.env.NEXT_PUBLIC_GOOGLEMAP_KEY,
  },
});

/* API for Earth Search  */

export const getEarthSearchAPI = axios.create({
  baseURL: "https://cmr.earthdata.nasa.gov/search/",
})