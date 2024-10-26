import { cn } from "@/lib/utils";
import Catergories from "./categories";
import SortPopUp from "./sort-popup";
import Container from "./container";
import FilterPopUp from "./filter-popup";
import Search from "./search";

interface Props {
  className?: string;
}

export default function TopBar({ className }: Props) {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-4 shadow-lg shadow-black/5 z-10 ",
        className,
      )}
    >
      <Container className="flex items-center gap-4 h-10">
        <Search className="h-full" />
        <SortPopUp className="h-full" />
        <FilterPopUp className="h-full" />
      </Container>
    </div>
  );
}
