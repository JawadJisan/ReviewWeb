"use client";
import React from "react";
import Pagination from "./Pagination";
import { useGetListingProductQuery } from "@/redux/api/listingProductAPI";
import NewCard from "./NewCard";
const Collection = () => {
  const { data: reviewData, isLoading } = useGetListingProductQuery({});
  // const firstSixItems = reviewData.slice(0, 6);
  return (
    <>
      <div className="flex flex-col items-center gap-10">
        <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {reviewData?.listingProducts?.map((list: any) => {
            return (
              <li key={list.id} className="flex justify-center">
                <NewCard list={list} />
              </li>
            );
          })}
        </ul>

        {/* {totalPages > 1 && (
            <Pagination
              urlParamName={urlParamName}
              page={page}
              totalPages={totalPages}
            />
          )} */}
      </div>
    </>
  );
};

export default Collection;
