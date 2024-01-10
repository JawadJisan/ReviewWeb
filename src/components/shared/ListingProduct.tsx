"use client";
import { useGetListingProductQuery } from "@/redux/api/listingProductAPI";
import React from "react";

const ListingProduct = () => {
  const { data, isLoading } = useGetListingProductQuery({});
  console.log(data, "Listing Product");

  return (
    <>
      <div>ListingProduct</div>
      {data?.listingProducts?.map((list: any) => (
        <p key={list.id}> {list.title} </p>
      ))}
    </>
  );
};

export default ListingProduct;
