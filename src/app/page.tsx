import Earth from "@/components/earth";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  // const json = axios.post("/api/convert-xml", {
  //   xml: `<results>
  //       <hits>52823</hits>
  //       <took>29</took>
  //       <references>
  //           <reference>
  //               <name>'Latent reserves' within the Swiss NFI</name>
  //               <id>C1931110427-SCIOPS</id>
  //               <location>https://cmr.earthdata.nasa.gov:443/search/concepts/C1931110427-SCIOPS/6</location>
  //               <revision-id>6</revision-id>
  //           </reference>
  //           <reference>
  //               <name>(U-Th)/He ages from the Kukri Hills of southern Victoria Land</name>
  //               <id>C1214587974-SCIOPS</id>
  //               <location>https://cmr.earthdata.nasa.gov:443/search/concepts/C1214587974-SCIOPS/4</location>
  //               <revision-id>4</revision-id>
  //           </reference>
  //           <reference>
  //               <name>0.5 hour 1 M HCl extraction data for the Windmill Islands marine sediments</name>
  //               <id>C1214305813-AU_AADC</id>
  //               <location>https://cmr.earthdata.nasa.gov:443/search/concepts/C1214305813-AU_AADC/11</location>
  //               <revision-id>11</revision-id>
  //           </reference>
  //           <reference>
  //               <name>1-100Hz ULF/ELF Electromagnetic Wave Observation at Syowa Station</name>
  //               <id>C1214590112-SCIOPS</id>
  //               <location>https://cmr.earthdata.nasa.gov:443/search/concepts/C1214590112-SCIOPS/7</location>
  //               <revision-id>7</revision-id>
  //           </reference>
  //           <reference>
  //               <name>10 Days Synthesis of SPOT VEGETATION Images (VGT-S10)</name>
  //               <id>C2207472890-FEDEO</id>
  //               <location>https://cmr.earthdata.nasa.gov:443/search/concepts/C2207472890-FEDEO/12</location>
  //               <revision-id>12</revision-id>
  //           </reference>
  //           <reference>
  //               <name>10 m firn temperature data: LGB traverses 1990-95</name>
  //               <id>C1214313574-AU_AADC</id>
  //               <location>https://cmr.earthdata.nasa.gov:443/search/concepts/C1214313574-AU_AADC/10</location>
  //               <revision-id>10</revision-id>
  //           </reference>
  //           <reference>
  //               <name>10 sec GPS ground tracking data</name>
  //               <id>C1214586614-SCIOPS</id>
  //               <location>https://cmr.earthdata.nasa.gov:443/search/concepts/C1214586614-SCIOPS/4</location>
  //               <revision-id>4</revision-id>
  //           </reference>
  //           <reference>
  //               <name>10 year trend of levels of organochlorine pollutants in Antarctic seabirds</name>
  //               <id>C1214305884-AU_AADC</id>
  //               <location>https://cmr.earthdata.nasa.gov:443/search/concepts/C1214305884-AU_AADC/11</location>
  //               <revision-id>11</revision-id>
  //           </reference>
  //           <reference>
  //               <name>10-HS Pfynwald</name>
  //               <id>C1647993129-SCIOPS</id>
  //               <location>https://cmr.earthdata.nasa.gov:443/search/concepts/C1647993129-SCIOPS/15</location>
  //               <revision-id>15</revision-id>
  //           </reference>
  //           <reference>
  //               <name>101.1 m long horizontal blue ice core collected from Scharffenbergbotnen, DML, Antarctica, in 2003/2004</name>
  //               <id>C1214614210-SCIOPS</id>
  //               <location>https://cmr.earthdata.nasa.gov:443/search/concepts/C1214614210-SCIOPS/4</location>
  //               <revision-id>4</revision-id>
  //           </reference>
  //       </references>
  //   </results>`,
  // });

  // json.then((res) => {
  //   console.log(JSON.parse(JSON.stringify(res.data)))
  // })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-5 w-full my-32">
        <div className="flex flex-col items-center md:items-start col-span-1 justify-center md:justify-start md:col-span-2 md:order-1 order-last">
          <div className="mt-4 md:mt-0 p-0.5 rounded-3xl bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 mb-8">
            <div className="bg-background px-4 py-1 rounded-3xl">
              <h3 className="text-primary/70 text-xs md:text-base">
                Built within NASA Space Apps Challenge 2023 🚀
              </h3>
            </div>
          </div>
          <div className="mb-8 md:text-left text-center">
            <h1 className=" text-4xl py-2 md:text-7xl font-semibold w-full md:max-w-[90%] text-transparent bg-clip-text bg-gradient-to-b from-white/90 via-white/70 to-white/20">
              Best Tool for&nbsp;Geologists
            </h1>
            <p className="text-primary/70 mt-2 text-sm md:text-base">
              Explore NASA Data simplified, with latest visualization
              technologies.
              Our tool broadens horizons of Space-Exploring
            </p>
          </div>
          <div className="flex gap-x-3">
            <Link
              href="/map"
              className="md:text-base text-xs px-6 py-2 bg-primary hover:opacity-50 transition text-secondary rounded-3xl flex items-center justify-center"
            >
              Start Exploring
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/docs"
              className="md:text-base text-xs px-6 py-2 bg-transparent hover:bg-primary/30 transition text-primary rounded-3xl flex items-center justify-center"
            >
              How to use
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
        <Earth />
      </div>
    </main>
  );
}
