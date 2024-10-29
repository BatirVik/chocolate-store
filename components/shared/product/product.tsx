import { ProductData } from "@/lib/definitions";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import img from "@/mock/chocolate.webp";

interface Props {
  className?: string;
  productData: ProductData;
}

export function Product({ className, productData }: Props) {
  function formatProductName(productName: string): string {
    const len = 35;
    return productName.length <= len
      ? productName
      : productName.slice(0, len) + "...";
  }

  return (
    <Link
      href="#"
      className={cn(
        "w-72  hover:bg-gray-50 hover:shadow duration-300 rounded-sm p-2",
        className,
      )}
    >
      <Image
        src={img}
        alt="product image"
        className="w-full rounded-sm mb-2 "
      />

      <div className="flex justify-between gap-2 items-center h-16">
        <h2 className="text-xl text-center flex-1 font-medium">
          {formatProductName(productData.name)}
        </h2>
        <div className="flex-col flex items-center">
          <p className="font-medium text-gray-700">
            {productData.price.toFixed(2)}€
          </p>
          <Button size={"sm"} className="ml-auto">
            Add
          </Button>
        </div>
      </div>
    </Link>
  );
}
