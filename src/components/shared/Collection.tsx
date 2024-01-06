"use client";
import { IEvent } from "@/lib/database/models/event.model";
import React from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import { useGetListingProductQuery } from "@/redux/api/listingProductAPI";
import NewCard from "./NewCard";

type CollectionProps = {
  data: IEvent[];
  emptyTitle: string;
  emptyStateSubtext: string;
  limit: number;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
  collectionType?: "Events_Organized" | "My_Tickets" | "All_Events";
};

const Collection = ({
  data,
  emptyTitle,
  emptyStateSubtext,
  page,
  totalPages = 0,
  collectionType,
  urlParamName,
}: CollectionProps) => {
  const { data: reviewData, isLoading } = useGetListingProductQuery();
  return (
    <>
      <div className="flex flex-col items-center gap-10">
        <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {reviewData?.listingProducts?.map((list) => {
            // const hasOrderLink = collectionType === "Events_Organized";
            // const hidePrice = collectionType === "My_Tickets";

            return (
              <li key={list.id} className="flex justify-center">
                <NewCard
                  list={list}
                  // hasOrderLink={hasOrderLink}
                  // hidePrice={hidePrice}
                />
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
