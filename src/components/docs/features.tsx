interface Feature {
  name: string;
  description: string;
}

const features: Feature[] = [
  {
    name: 'Interactive Map',
    description: 'Our interactive Google Map offers various viewing modes, including satellite, terrain, and plain. This allows users to visualize geological data in the most suitable way for their specific needs.'
  },
  {
    name: 'Data Filters',
    description: 'We have implemented filters that display granule data. A granule, in this context, is a particular chunk of earth on a specific topic, such as a volcano. These filters enable users to easily locate and explore data related to specific geological features of interest.'
  },
  {
    name: 'Detailed Information',
    description: 'When a user clicks on a topic, they can see shapes on the map indicating the location of the geological activity. The platform also provides detailed information such as the location where the data was explored, the data center, coordinates, coordinate system, and the timestamp of data collection. This level of detail allows users to understand the context and source of the data.'
  }
]

export default function KeyFeatures() {
  return (
    <section id="docs-features">
      <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'># Key Features</h2>
      <ul>
        {features.map((feature) => (
          <li key={feature.name}>
            <p className='leading-7 [&:not(:first-child)]:mt-6'>
              <span className='font-bold'>{feature.name}{' '}</span>
              {feature.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}