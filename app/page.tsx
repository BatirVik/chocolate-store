import { Products } from "@/components/shared/product/products";
import TopBar from "@/components/shared/top-bar";
import { getProductsPage } from "@/lib/db/product";

interface Props {
  searchParams: Promise<{
    query?: string;
    page?: string;
    sort?: string;
    filter?: string[];
  }>;
}

export default async function Page({ searchParams }: Props) {
  const { query, page } = await searchParams;

  function getProductsData() {
    let pageNum = Number(page);
    if (Number.isNaN(pageNum) || pageNum < 1) {
      pageNum = 1;
    }
    return getProductsPage({ query, page: pageNum });
  }

  return (
    <>
      <TopBar />
      <Products getProductsData={getProductsData} />
    </>
  );
}
