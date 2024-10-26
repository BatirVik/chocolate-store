import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const categoryNames = ["Dark", "Milk", "White"];
const activeIndex = 0;

export default function Catergories({ className }: Props) {
  const categories = categoryNames.map((cat, index) => {
    const isActive = index === activeIndex;
    return (
      <a
        key={index}
        className={cn(
          isActive && "bg-white shadow-md",
          "rounded-2xl font-bold px-5 flex items-center",
        )}
      >
        {cat}
      </a>
    );
  });

  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {categories}
    </div>
  );
}
