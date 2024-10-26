import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Sorts from "./sorts";

interface Props {
  className?: string;
}

export default function SortPopUp({ className }: Props) {
  const defaultSortValue = "popular";
  const sortValues = {
    Popular: "popular",
    Newest: "new",
  };
  return (
    <div
      className={cn(
        "flex items-center gap-1 bg-gray-50 px-5 py-1 rounded-2xl cursor-pointer",
        className,
      )}
    >
      <Popover>
        <PopoverTrigger>
          <div className={cn("inline-flex items-center gap-1", className)}>
            <ArrowUpDown size={16} />
            <p>Sort by: Popular</p>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto m-2">
          <Sorts defaultValue={defaultSortValue} values={sortValues} />
        </PopoverContent>
      </Popover>
    </div>
  );
}
