import ParamLink from './ui/param-link'
import { PartialGranula } from '@/store/granulas'

type SideItem = {
  label: string
  value: string
}

interface SideItemProps {
  param: { label: string; value: string };
  granula: PartialGranula;
}

function SidebarSection({ param, granula }: SideItemProps) {
  return (
    <ParamLink className='w-[100%] my-2 h-[100%]' paramName='granula-title' link={{
      label: param.label,
      value: param.value
    }} />
  )
}

export default SidebarSection;
