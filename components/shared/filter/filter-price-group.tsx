"use client";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

interface Props {
  className?: string;
  minPricePlaceholder?: string;
  maxPricePlaceholder?: string;
}

export function FilterPriceGroup({
  className,
  minPricePlaceholder,
  maxPricePlaceholder,
}: Props) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const handleMinPriceChange = useDebouncedCallback((value: string) => {
    if (value) {
      params.set("min", value);
    } else {
      params.delete("min");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handleMaxPriceChange = useDebouncedCallback((value: string) => {
    if (value) {
      params.set("max", value);
    } else {
      params.delete("max");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className={cn("flex flex-col", className)}>
      <b>Price</b>
      <div className="pb-2">
        <Label htmlFor="min-price">Min</Label>
        <Input
          id="min-price"
          type="number"
          placeholder={minPricePlaceholder}
          defaultValue={params.get("min") || ""}
          onChange={(e) => handleMinPriceChange(e.currentTarget.value)}
        />
      </div>
      <div>
        <Label htmlFor="max-price">Max</Label>
        <Input
          id="max-price"
          type="number"
          placeholder={maxPricePlaceholder}
          defaultValue={params.get("max") || ""}
          onChange={(e) => handleMaxPriceChange(e.currentTarget.value)}
        />
      </div>
    </div>
  );
}
