import { cn } from "@/lib/utils";
import FilterCheckboxGroup from "./filter-checkbox-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  className?: string;
}

export default function Filters({ className }: Props) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div className="flex flex-col">
        <b>Price</b>
        <div className="pb-2">
          <Label htmlFor="min-price" className="font-bold">
            Min
          </Label>
          <Input id="min-price" type="number" placeholder="0" />
        </div>
        <div>
          <Label htmlFor="max-price" className="font-bold">
            Max
          </Label>
          <Input className="" id="max-price" type="number" placeholder="100" />
        </div>
      </div>
      <FilterCheckboxGroup
        title="Kind"
        items={[
          { text: "Dark", value: "dard" },
          { text: "Milk", value: "milk" },
          { text: "White", value: "white" },
        ]}
      />
      {/* <FilterCheckboxGroup title="Kind" /> */}
    </div>
  );
}
