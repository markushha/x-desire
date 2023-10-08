import { Metadata } from 'next';
import Hero from '@/components/docs/hero';
import Introduction from '@/components/docs/introduction';
import KeyFeatures from '@/components/docs/features';
import { Vision } from '@/components/docs/vision';
import { Separator } from "@/components/ui/separator";
import ResponsiveDocsSidebar from '@/components/docs/responsive-sidebar';

export const metadata: Metadata = {
  title: "X-Desire | Docs",
  description: "X-Desire docs learn how to use x-desire for earth data",
};

export default function DocsPage() {
  return (
    <div className="flex">
      <div className="w-full min-h-screen flex flex-col items-center my-32 px-4 md:px-8">
        <div className='flex gap-x-2 md:gap-x-4 w-full min-h-full'>
          <ResponsiveDocsSidebar />
          <div className='mx-4 py-4'>
            <Hero />
            <Separator className='my-8' />
            <Introduction />
            <Separator className='my-8' />
            <KeyFeatures />
            <Separator className='my-8' />
            <Vision />
          </div>
        </div>
      </div>
    </div>
  );
}
