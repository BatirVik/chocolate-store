import { cn } from "@/lib/utils";
import { SlidersHorizontal } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FilterData } from "@/lib/definitions";
import { FilterPriceGroup } from "./filter-price-group";
import { FilterCheckboxGroup } from "./filter-checkbox-group";

interface Props {
  className?: string;
  filterData: FilterData;
}

export function FilterPopup({ className, filterData }: Props) {
  const entries = Object.entries(filterData.checkboxGroups);
  const filterCheckboxGroups = entries.map(([groupName, checks], index) => (
    <FilterCheckboxGroup
      key={index}
      header={groupName}
      checkboxesData={checks}
    />
  ));

  return (
    <div
      className={cn(
        "inline-flex items-center border-[1px] shadow-sm py-1 rounded-2xl cursor-pointer",
        className,
      )}
    >
      <Popover>
        <PopoverTrigger>
          <div className="inline-flex items-center text-sm gap-3 px-3">
            <p>Filters</p>
            <SlidersHorizontal size={14} color="gray" />
          </div>
        </PopoverTrigger>
        <PopoverContent className="m-2 flex-col flex gap-2 w-[180px]">
          <FilterPriceGroup />
          {filterCheckboxGroups}
        </PopoverContent>
      </Popover>
    </div>
  );
}
