"use client";

import { cn } from "@/lib/utils";
import { CheckboxData } from "@/lib/definitions";
import { Checkbox } from "@/components/ui/checkbox";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";

interface Props {
  className?: string;
  checkboxesData: CheckboxData[];
  header: string;
}
export function FilterCheckboxGroup({
  className,
  checkboxesData,
  header,
}: Props) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams);

  function getFilterOptions(): string[] {
    const value = params.get("filter");
    return value ? value.split(",") : [];
  }

  function isFilterOptionOn(option: string): boolean {
    return getFilterOptions().includes(option);
  }

  function handleCheckedChange(checkboxValue: string, checked: boolean): void {
    let filters = getFilterOptions();
    filters = checked
      ? filters.concat(checkboxValue)
      : filters.filter((o) => o !== checkboxValue);
    params.set("filter", filters.join(","));
    replace(`${pathname}?${params.toString()}`);
  }

  const checkboxes = checkboxesData.map((checkbox, index) => (
    <div className="flex items-center gap-2" key={index}>
      <Checkbox
        onCheckedChange={handleCheckedChange.bind(null, checkbox.value)}
        checked={isFilterOptionOn(checkbox.value)}
        className=""
        id={`filter-checkbox-${checkbox.value}}`}
      />
      <Label
        htmlFor={`filter-checkbox-${checkbox.value}}`}
        className="leading-none cursor-pointer flex-1"
      >
        {checkbox.label}
      </Label>
    </div>
  ));

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <b>{header}</b>
      {checkboxes}
    </div>
  );
}
