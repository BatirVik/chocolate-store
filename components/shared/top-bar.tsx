import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Search } from "./search";
import { Sort } from "./sort";
import { Filter } from "./filter";

interface Props {
  className?: string;
}

export default function TopBar({ className }: Props) {
  const sortData = {
    defaultOptionIndex: 1,
    options: [
      { label: "Popular", value: "popular" },
      { label: "New", value: "new" },
    ],
  };
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
        "sticky top-0 bg-white p-4 pt-0 shadow-lg shadow-black/5 z-10",
        className,
      )}
    >
      <Container className="flex items-center gap-4 h-10">
        <Search className="h-full" />
        <Sort className="h-full" sortData={sortData} />
        <Filter className="h-full" filterData={filterData} />
      </Container>
    </div>
  );
}
