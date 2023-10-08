import { Sheet, SheetTrigger, SheetContent } from '../ui/sheet';
import { Button } from '../ui/button';
import DocsSidebar from './docs-sidebar';

export default function ResponsiveDocsSidebar() {
  return (
    <div className='min-h-full lg:flex-row flex flex-col'>
      <div className='hidden lg:block'>
        <DocsSidebar />
      </div>
      
    </div>
  )
}