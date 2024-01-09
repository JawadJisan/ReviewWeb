"use client";
import ListingForm from "@/components/shared/ListingForm";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "@/utils/auth.service";

const CreateListingReview = () => {
  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [router]);
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center">Listing Form</h3>
      </section>
      <div className="wrapper my-8">
        <ListingForm />
      </div>
    </>
  );
};

export default CreateListingReview;
