import { Separator } from "../ui/separator";
export default function Hero() {
  return (
    <section id="docs-start">
      <h2 className='scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0'># Get Started</h2>
      <Separator className="my-3" />
      <h1 className='scroll-m-20 mt-4 text-xl font-extrabold tracking-tight lg:text-3xl'>X-Desire Team&apos;s Geological Data Platform</h1>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>Welcome to the X-Desire Team&apos;s Geological Data Platform, a groundbreaking initiative designed during the NASA Apps Challenge. Our team comprises passionate individuals dedicated to making geological data easily accessible to geologists worldwide.</p>
    </section>
  )
}