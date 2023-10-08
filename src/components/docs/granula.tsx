import Flowchart from './react-flow/flowchart'

export default function Granula() {
  return (
    <section id="docs-granula">
      <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'># Granula</h2>
      <p className='leading-7 [&:not(:first-child)]:mt-6 mb-4'>Granule refers to the individual files that make up a collection or dataset. These granules are the basic units of data that can be searched, accessed, and downloaded from the Earthdata Search platform. They represent specific subsets of the larger dataset, often corresponding to a specific geographical area and time period.</p>
      <Flowchart />
    </section>
  )
}