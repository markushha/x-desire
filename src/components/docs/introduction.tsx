import { Separator } from "../ui/separator";

export default function Introduction() {
  return (
    <section id="docs-intro">
      <h2 className='scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0'># Introduction</h2>
      <Separator className="my-3" />
      <p className='leading-7 [&:not(:first-child)]:mt-6'>Our platform leverages data from the NASA CMR API and NASA&apos;s Earthdata Search API/websites to provide geologists with a comprehensive, interactive, and user-friendly tool for accessing and analyzing geological data. We have integrated these data sources into an interactive Google Map, offering various viewing modes such as satellite, terrain, and plain.</p>
    </section>
  )
}