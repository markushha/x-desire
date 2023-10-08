"use client";

import axios from "axios";
import Flowchart from "./flowchart";
import "./styles.css";



export default function Home() {
    
    

  const json = axios.post("/api/convert-xml", {
    xml: `<results>
        <hits>52823</hits>
        <took>29</took>
        <references>
            <reference>
                <name>'Latent reserves' within the Swiss NFI</name>
                <id>C1931110427-SCIOPS</id>
                <location>https://cmr.earthdata.nasa.gov:443/search/concepts/C1931110427-SCIOPS/6</location>
                <revision-id>6</revision-id>
            </reference>
            <reference>
                <name>(U-Th)/He ages from the Kukri Hills of southern Victoria Land</name>
                <id>C1214587974-SCIOPS</id>
                <location>https://cmr.earthdata.nasa.gov:443/search/concepts/C1214587974-SCIOPS/4</location>
                <revision-id>4</revision-id>
            </reference>
            <reference>
                <name>0.5 hour 1 M HCl extraction data for the Windmill Islands marine sediments</name>
                <id>C1214305813-AU_AADC</id>
                <location>https://cmr.earthdata.nasa.gov:443/search/concepts/C1214305813-AU_AADC/11</location>
                <revision-id>11</revision-id>
            </reference>
            <reference>
                <name>1-100Hz ULF/ELF Electromagnetic Wave Observation at Syowa Station</name>
                <id>C1214590112-SCIOPS</id>
                <location>https://cmr.earthdata.nasa.gov:443/search/concepts/C1214590112-SCIOPS/7</location>
                <revision-id>7</revision-id>
            </reference>
            <reference>
                <name>10 Days Synthesis of SPOT VEGETATION Images (VGT-S10)</name>
                <id>C2207472890-FEDEO</id>
                <location>https://cmr.earthdata.nasa.gov:443/search/concepts/C2207472890-FEDEO/12</location>
                <revision-id>12</revision-id>
            </reference>
            <reference>
                <name>10 m firn temperature data: LGB traverses 1990-95</name>
                <id>C1214313574-AU_AADC</id>
                <location>https://cmr.earthdata.nasa.gov:443/search/concepts/C1214313574-AU_AADC/10</location>
                <revision-id>10</revision-id>
            </reference>
            <reference>
                <name>10 sec GPS ground tracking data</name>
                <id>C1214586614-SCIOPS</id>
                <location>https://cmr.earthdata.nasa.gov:443/search/concepts/C1214586614-SCIOPS/4</location>
                <revision-id>4</revision-id>
            </reference>
            <reference>
                <name>10 year trend of levels of organochlorine pollutants in Antarctic seabirds</name>
                <id>C1214305884-AU_AADC</id>
                <location>https://cmr.earthdata.nasa.gov:443/search/concepts/C1214305884-AU_AADC/11</location>
                <revision-id>11</revision-id>
            </reference>
            <reference>
                <name>10-HS Pfynwald</name>
                <id>C1647993129-SCIOPS</id>
                <location>https://cmr.earthdata.nasa.gov:443/search/concepts/C1647993129-SCIOPS/15</location>
                <revision-id>15</revision-id>
            </reference>
            <reference>
                <name>101.1 m long horizontal blue ice core collected from Scharffenbergbotnen, DML, Antarctica, in 2003/2004</name>
                <id>C1214614210-SCIOPS</id>
                <location>https://cmr.earthdata.nasa.gov:443/search/concepts/C1214614210-SCIOPS/4</location>
                <revision-id>4</revision-id>
            </reference>
        </references>
    </results>`,
  });

  json.then((res) => {
    console.log(JSON.parse(JSON.stringify(res.data)))
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">        
        <Flowchart />
    </main>

    
  );
}
