import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ParamLink({
  link,
  paramName,
  className,
}: {
  link: { label: string; value: string };
  paramName: string;
  className?: string;
}) {
  return (
    <Button className={className} variant="outline">
      <Link
        href={{
          query: {
            [paramName]: link.value,
          },
        }}
      >
        {link.label}
      </Link>
    </Button>
  );
}
