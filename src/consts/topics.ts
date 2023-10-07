
type Topic = {
  label: string;
  value: string;
  granulaUrl: string;
}

export const topics: Topic[] = [
  { label: 'Earthquakes', granulaUrl: '/granules.json?echo_collection_id=C179001775-SEDAC', value: 'earthquakes' },
  { label: 'Atmosphere', granulaUrl: '/granules.json?echo_collection_id=C1562021084-LAADS', value: 'atmosphere' },
  { label: 'Volcanic Activity', granulaUrl: '/granules.json?echo_collection_id=C1615905582-GES_DISC', value: 'volcanic-activity' },
  { label: 'Surface Degradation', granulaUrl: '/granules.json?echo_collection_id=C2420522159-NSIDC_ECS', value: 'surface-degradation' },
  { label: 'Sedimentation', granulaUrl: '/granules.json?echo_collection_id=C1214470488-ASF', value: 'sedimentation' },
  { label: 'Frozen Ground', granulaUrl: '/granules.json?echo_collection_id=C1214470533-ASF', value: 'frozen-ground' },
  { label: 'Minerals', granulaUrl: '/granules.json?echo_collection_id=C2408034484-LPCLOUD', value: 'minerals' },
  { label: 'Sedimentary Rocks', granulaUrl: '/granules.json?echo_collection_id=C2761762895-ORNL_CLOUD', value: 'sedimentary-rocks' },
]