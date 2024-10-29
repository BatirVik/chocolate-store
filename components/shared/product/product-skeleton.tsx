import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  className?: string;
}

export function ProductSkeleton({ className }: Props) {
  return (
    <Skeleton
      color="red"
      className={cn("w-72 rounded-sm p-2 bg-gray-100", className)}
    >
      <div className="w-full rounded-sm mb-2 aspect-square bg-gray-200" />
      <div className="flex justify-between gap-2 items-center h-16"></div>
    </Skeleton>
  );
}
