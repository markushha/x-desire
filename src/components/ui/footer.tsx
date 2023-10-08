import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full relative bottom-0 flex items-center border-t border-secondary bg-transparent px-4 md:px-8 py-8">
      <div className="w-full flex md:flex-row flex-col items-start md:items-center md:justify-between justify-start">
        <div className="flex items-center w-full">
          <Link
            href="/"
            className="font-semibold items-center flex text-xl md:text-2xl"
          >
            X-Desire
          </Link>
          <Link
            className="ml-2 md:ml-8 text-primary/70 hover:text-primary text-sm md:text-base"
            href="mailto:markincontact@icloud.com"
          >
            Contact Us
          </Link>
        </div>
        <p className=" md:text-base text-xs mt-2 md:mt-0">
          Built within NASA Space Apps Challenge | 2023
        </p>
      </div>
    </footer>
  );
}
