import Earth from "@/components/earth";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 md:px-8 lg:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center justify-center w-full my-32">
        <div className="flex flex-col items-center lg:items-start col-span-1 justify-center lg:justify-start lg:col-span-2 lg:order-1 order-last">
          <div className="mt-4 lg:mt-0 p-0.5 rounded-3xl bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 mb-8">
            <div className="bg-background px-4 py-1 rounded-3xl">
              <h3 className="text-primary/70 text-xs text-center lg:text-base">
                Built within NASA Space Apps Challenge 2023 🚀
              </h3>
            </div>
          </div>
          <div className="mb-8 lg:text-left text-center">
            <h1 className="text-4xl py-2 pr-2 lg:text-7xl font-semibold w-full lg:max-w-[90%] text-transparent bg-clip-text bg-gradient-to-b from-white/90 via-white/70 to-white/20">
              Best Tool for&nbsp;Geologists
            </h1>
            <p className="text-primary/70 mt-2 text-sm lg:text-base">
              Explore NASA Data simplified, with latest visualization
              technologies.
              Our tool broadens horizons of Space-Exploring
            </p>
          </div>
          <div className="flex gap-x-3">
            <Link
              href="/map"
              className="lg:text-base text-xs px-6 py-2 bg-primary hover:opacity-50 transition text-secondary rounded-3xl flex items-center justify-center"
            >
              Start Exploring
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/docs"
              className="lg:text-base text-xs px-6 py-2 bg-transparent hover:bg-primary/30 transition text-primary rounded-3xl flex items-center justify-center"
            >
              How to use
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
        <Earth />
      </div>
    </main>
  );
}
