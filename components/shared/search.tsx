"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

interface Props {
  className?: string;
}

export function Search({ className }: Props) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams);

  const handleSearch = useDebouncedCallback((term) => {
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <Input
      className={cn("flex-1 inline", className)}
      type="text"
      alt="search bar"
      placeholder="Search"
      defaultValue={params.get("query") || ""}
      onChange={(e) => handleSearch(e.currentTarget.value)}
    />
  );
}
