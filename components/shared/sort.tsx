"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

import { SortData } from "@/lib/definitions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PropsClient {
  className?: string;
  sortData: SortData;
}

export function Sort({ className, sortData }: PropsClient) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams);

  function handleSort(value: string): void {
    params.set("sort", value);
    replace(`${pathname}?${params.toString()}`);
  }

  const selectItems = sortData.options.map(({ label, value }, index) => (
    <SelectItem key={index} value={value}>
      {label}
    </SelectItem>
  ));

  function getDefaultValue(): string | undefined {
    const value = params.get("sort");
    if (value) {
      return sortData.options.find((o) => o.value === value)?.value;
    }
    return sortData.options[sortData.defaultOptionIndex].value;
  }

  return (
    <Select defaultValue={getDefaultValue()} onValueChange={handleSort}>
      <SelectTrigger className={cn("w-[180px] gap-1", className)}>
        <p>Sort by:</p>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>{selectItems}</SelectContent>
    </Select>
  );
}
