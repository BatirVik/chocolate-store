import { cn } from "@/lib/utils";
import { Product } from "./product";
import { ProductSkeleton } from "./product-skeleton";
import { ProductData } from "@/lib/definitions";
import { Container } from "@/components/shared/container";
import { Suspense } from "react";

interface Props {
  className?: string;
  getProductsData: () => Promise<ProductData[]>;
}

export async function Products({ className, getProductsData }: Props) {
  function skeleton() {
    return new Array(20).fill(<ProductSkeleton />);
  }

  async function products() {
    const productsData = await getProductsData();
    return productsData.map((p, i) => (
      <Product productData={p} key={i} className="" />
    ));
  }

  return (
    <Container
      className={cn("flex gap-4 pt-8 flex-wrap justify-center p-4", className)}
    >
      <Suspense fallback={skeleton()}>{products()}</Suspense>
    </Container>
  );
}
