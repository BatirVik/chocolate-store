import { Container } from "@/components/shared/container";
import { Products } from "@/components/shared/product/products";
import TopBar from "@/components/shared/top-bar";

interface Props {
  searchParams: Promise<{
    query?: string;
    page?: string;
    sort?: string;
    filter?: string[];
  }>;
}

export default async function Page({ searchParams }: Props) {
  const productsData = [
    {
      price: 115.0,
      name: "Dark Chocolate with Orange and Mint extra long text",
      description: "Best chocolate in the town and even in the world",
    },
    {
      price: 1.99,
      name: "Milk Chocolate",
      description: "Best chocolate in the town and even in the world",
    },
    {
      price: 11.99,
      name: "Chocolate",
      description: "Best chocolate in the town and even in the world",
    },
    {
      price: 115,
      name: "Chocolate",
      description: "Best chocolate in the town and even in the world",
    },
    {
      price: 115,
      name: "Chocolate",
      description: "Best chocolate in the town and even in the world",
    },
    {
      price: 115,
      name: "Chocolate",
      description: "Best chocolate in the town and even in the world",
    },
    {
      price: 115,
      name: "Chocolate",
      description: "Best chocolate in the town and even in the world",
    },
  ];

  return (
    <>
      <TopBar />
      <Products productsData={productsData} />
    </>
  );
}
