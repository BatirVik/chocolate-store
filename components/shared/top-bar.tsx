import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Search } from "./search";
import { Sort } from "./sort";
import { Filter } from "./filter";

interface Props {
  className?: string;
}

export default function TopBar({ className }: Props) {
  const filterData = {
    checkboxGroups: {
      Kind: [
        { label: "Dark", value: "1" },
        { label: "Milk", value: "2" },
        { label: "White", value: "3" },
      ],
      Flavors: [
        { label: "Orange", value: "4" },
        { label: "Mint", value: "5" },
        { label: "Pistachio", value: "6" },
      ],
    },
  };
  return (
    <div
      className={cn(
        "sticky top-0 bg-white shadow-lg shadow-black/5 z-10 py-4",
        className,
      )}
    >
      <Container className="flex items-center h-10 px-4 gap-4">
        <Search className="h-full" />
        <Sort className="h-full" />
        <Filter className="h-full" filterData={filterData} />
      </Container>
    </div>
  );
}
