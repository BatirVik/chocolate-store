import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";

interface Props {
  className?: string;
}

export default function SortPopUp({ className }: Props) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 bg-gray-50 px-5 py-1 rounded-2xl cursor-pointer",
        className,
      )}
    >
      <ArrowUpDown size={16} />
      <p>Sort by:</p>
      <p>Popular</p>
    </div>
  );
}
