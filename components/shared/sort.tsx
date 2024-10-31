"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { SortOption } from "@/lib/definitions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SORT_VALUE_LABEL: { [key: number]: string } = {
  [SortOption.NEW_TO_OLD]: "New",
  [SortOption.LOW_TO_HIGH]: "Price Low",
  [SortOption.HIGH_TO_LOW]: "Price High",
};

const DEFAULT_SORT_VALUE = SortOption.NEW_TO_OLD;

interface Props {
  className?: string;
}

export function Sort({ className }: Props) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  function handleSort(value: string): void {
    params.set("sort", value);
    replace(`${pathname}?${params.toString()}`);
  }

  const selectItems = Object.entries(SORT_VALUE_LABEL).map(
    ([value, label], index) => (
      <SelectItem key={index} value={String(value)}>
        {label}
      </SelectItem>
    ),
  );

  function getDefaultValue(): string {
    const value = params.get("sort");
    if (value && SORT_VALUE_LABEL[Number(value)]) {
      return value;
    }
    return String(DEFAULT_SORT_VALUE);
  }

  return (
    <Select defaultValue={getDefaultValue()} onValueChange={handleSort}>
      <SelectTrigger className={cn("w-[200px] gap-1", className)}>
        <p>Sort by:</p>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>{selectItems}</SelectContent>
    </Select>
  );
}
