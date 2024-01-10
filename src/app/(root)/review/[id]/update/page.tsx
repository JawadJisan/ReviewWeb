"use client";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { isLoggedIn } from "@/utils/auth.service";
import ListingForm from "@/components/shared/UpdateListingForm";
import {
  useGetSingleListingProductQuery,
  useGetSingleReviewQuery,
} from "@/redux/api/listingProductAPI";

const UpdateListingReview = () => {
  const router = useRouter();
  const params = useParams<{
    id: any;
    tag: string;
    item: string;
  }>();

  const { data: singleData, isLoading } = useGetSingleListingProductQuery(
    params.id
  );
  // const { data, isLoading } = useGetSingleReviewQuery(params?.id);
  console.log(singleData, "singleData");

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [router]);
  if (isLoading) {
    return <p>Loading</p>;
  }
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center">Update Form</h3>
        <h3 className="wrapper h3-bold text-center"></h3>
      </section>
      <div className="wrapper my-8">
        {singleData && <ListingForm detailsData={singleData?.data} />}
      </div>
    </>
  );
};

export default UpdateListingReview;
