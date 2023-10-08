import { Sheet, SheetTrigger, SheetContent } from '../ui/sheet';
import { Button } from '../ui/button';
import DocsSidebar from './docs-sidebar';

export default function ResponsiveDocsSidebar() {
  return (
    <div className='min-h-full'>
      <div className='hidden lg:block'>
        <DocsSidebar />
      </div>
      <div className='lg:hidden block m-4'>
        <Sheet>
          <SheetTrigger asChild>
            <Button className='fixed right-10 top-30'>
              Menu
            </Button>
          </SheetTrigger>
          <SheetContent side='left'>
            <DocsSidebar />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}