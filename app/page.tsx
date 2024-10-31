import { Pagination } from "@/components/shared/pagination";
import { Products } from "@/components/shared/product/products";
import TopBar from "@/components/shared/top-bar";
import { getProductsPage, getTotalPages } from "@/lib/db/product";
import { Suspense } from "react";

interface Props {
  searchParams: Promise<{
    query?: string;
    page?: string;
    sort?: string;
    filter?: string[];
  }>;
}

export default async function Page({ searchParams }: Props) {
  const { query, ...params } = await searchParams;
  const page = Number(params.page) || 1;

  return (
    <>
      <TopBar />
      <Products getProductsData={() => getProductsPage({ query, page })} />
      <Suspense>
        {getTotalPages({ query, page }).then((totalPages) => (
          <Pagination totalPages={totalPages} className="mb-4" />
        ))}
      </Suspense>
    </>
  );
}
