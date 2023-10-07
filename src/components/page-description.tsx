import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type PageDescriptionProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
};

export default function PageDescription({
  title,
  description,
  children,
  className
}: PageDescriptionProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {children && <CardContent>{children}</CardContent>}
    </Card>
  );
}
