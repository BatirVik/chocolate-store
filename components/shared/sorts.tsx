"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
  defaultValue: string;
  values: { [label: string]: string };
}

export default function Sorts({ className, defaultValue, values }: Props) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams);
  const value = params.get("sort") || defaultValue;

  function handleSort(value: string) {
    params.set("sort", value);
    replace(`${pathname}?${params.toString()}`);
  }

  const radios = Object.entries(values).map(([label, value]) => (
    <div className="flex items-center space-x-2" key={value}>
      <RadioGroupItem value={value} id={`radio-${value}`} />
      <Label htmlFor={`radio-${value}`}>{label}</Label>
    </div>
  ));

  return (
    <div className={className}>
      <RadioGroup
        defaultValue="option-one"
        onValueChange={handleSort}
        value={value}
      >
        {radios}
      </RadioGroup>
    </div>
  );
}
