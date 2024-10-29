import { cn } from "@/lib/utils";
import { Product } from "./product";
import { ProductSkeleton } from "./product-skeleton";
import { ProductData } from "@/lib/definitions";
import { Container } from "@/components/shared/container";

interface Props {
  className?: string;
  productsData: ProductData[];
}

export function Products({ className, productsData }: Props) {
  const products = productsData.map((p, i) => (
    <Product productData={p} key={i} className="" />
  ));

  return (
    <Container
      className={cn("flex gap-4 pt-8 flex-wrap justify-center p-4", className)}
    >
      {products}
      <ProductSkeleton />
    </Container>
  );
}
