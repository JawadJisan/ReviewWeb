"use client";
import { useGetListingProductQuery } from "@/redux/api/listingProductAPI";
import React from "react";

export default function ListingProduct() {
  const { data, isLoading } = useGetListingProductQuery();
  console.log(data, "listingProducts");
  return (
    <>
      <div>ListingProduct</div>
      {data?.listingProducts[0]?.title}
      {data?.listingProducts?.map((l: any) => (
        <p key={l.id}> {l.title} </p>
      ))}
    </>
  );
}
