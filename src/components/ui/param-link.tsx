import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ParamLink({
  link,
  className,
}: {
  link: { label: string; value: string };
  className?: string;
}) {
  return (
    <Button className={className} variant="outline">
      <Link
        href={{
          query: {
            topic: link.value,
          },
        }}
      >
        {link.label}
      </Link>
    </Button>
  );
}
