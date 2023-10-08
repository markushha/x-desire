import Hero from '@/components/docs/hero';
import Introduction from '@/components/docs/introduction';
import KeyFeatures from '@/components/docs/features';
import { Vision } from '@/components/docs/vision';
import { Separator } from "@/components/ui/separator";
import ResponsiveDocsSidebar from '@/components/docs/responsive-sidebar';

export default function DocsPage() {
  return (
    <div className="flex">
      <div className="w-full min-h-screen flex flex-col items-center">
        <div className='flex gap-x-2 md:gap-x-4 w-full min-h-full'>
          <ResponsiveDocsSidebar />
          <div className='mx-4 py-4'>
            <Hero />
            <Separator className='my-4' />
            <Introduction />
            <Separator className='my-4' />
            <KeyFeatures />
            <Separator className='my-4' />
            <Vision />
          </div>
        </div>
      </div>
    </div>
  );
}