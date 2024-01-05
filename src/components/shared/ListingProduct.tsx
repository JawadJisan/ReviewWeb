"use client";
import { useGetListingProductQuery } from "@/redux/api/listingProductAPI";
import React from "react";

const ListingProduct = () => {
  const { data, isLoading } = useGetListingProductQuery();
  console.log(data, "Listing Product");

  return (
    <>
      <div>ListingProduct</div>
      {data?.listingProducts?.map((l) => (
        <p> {l.title} </p>
      ))}
    </>
  );
};

export default ListingProduct;
