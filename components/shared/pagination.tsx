"use client";

import * as ui from "@/components/ui/pagination";
import { useSearchParams, usePathname } from "next/navigation";

interface Props {
  totalPages: number;
  className?: string;
}

export function Pagination({ totalPages: totalPages, className }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams);
  const currentPage = Number(searchParams.get("page")) || 1;

  function getHrefGoToPage(page: number | string): string {
    params.set("page", String(page));
    return `${pathname}?${params.toString()}`;
  }

  let fromIndex, toIndex;
  if (totalPages <= 3) {
    fromIndex = 1;
    toIndex = totalPages;
  } else if (currentPage === totalPages) {
    fromIndex = totalPages - 2;
    toIndex = totalPages;
  } else if (currentPage === 1) {
    fromIndex = 1;
    toIndex = fromIndex + 2;
  } else {
    fromIndex = currentPage - 1;
    toIndex = currentPage + 1;
  }

  const pageItems = [];
  for (let index = fromIndex; index <= toIndex; index++) {
    pageItems.push(
      <ui.PaginationItem key={index}>
        <ui.PaginationLink
          isActive={index === currentPage}
          href={getHrefGoToPage(index)}
        >
          {index}
        </ui.PaginationLink>
      </ui.PaginationItem>,
    );
  }
  return (
    <ui.Pagination className={className}>
      <ui.PaginationContent className="w-[400px] flex justify-center relative">
        {currentPage !== 1 && (
          <ui.PaginationItem className="absolute left-0">
            <ui.PaginationPrevious href={getHrefGoToPage(currentPage - 1)} />
          </ui.PaginationItem>
        )}

        {fromIndex !== 1 && (
          <>
            <ui.PaginationLink href={getHrefGoToPage(1)}>{1}</ui.PaginationLink>
            <ui.PaginationItem>
              <ui.PaginationEllipsis />
            </ui.PaginationItem>
          </>
        )}
        {pageItems}
        {toIndex !== totalPages && (
          <>
            <ui.PaginationItem>
              <ui.PaginationEllipsis />
            </ui.PaginationItem>
            <ui.PaginationLink href={getHrefGoToPage(totalPages)}>
              {totalPages}
            </ui.PaginationLink>
          </>
        )}

        {currentPage < totalPages && (
          <ui.PaginationItem className="absolute right-0">
            <ui.PaginationNext href={getHrefGoToPage(currentPage + 1)} />
          </ui.PaginationItem>
        )}
      </ui.PaginationContent>
    </ui.Pagination>
  );
}
