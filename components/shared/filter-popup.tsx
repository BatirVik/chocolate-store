import { cn } from "@/lib/utils";
import { SlidersHorizontal } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Filters from "./filters";

interface Props {
  className?: string;
}

export default function FilterPopUp({ className }: Props) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 bg-gray-50 px-5 py-1 rounded-2xl cursor-pointer",
        className,
      )}
    >
      <Popover>
        <PopoverTrigger>
          <div className={cn("inline-flex items-center gap-1", className)}>
            <SlidersHorizontal size={16} />
            <p>Filters</p>
          </div>
        </PopoverTrigger>
        <PopoverContent className="m-2">
          <Filters />
        </PopoverContent>
      </Popover>
    </div>
  );
}
