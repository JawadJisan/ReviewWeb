"use server";
import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import GridCards from "@/components/shared/GridCards";
import { Button } from "@/components/ui/button";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import ListingProduct from "@/components/shared/ListingProduct";
import BestReviews from "@/components/shared/BestReviews";
import Blogs from "@/components/shared/Blogs";
// import { HomeCarousel } from "@/components/shared/HomeCarousel";

async function getReviews() {
  const result = await fetch("http://localhost:5000/api/v1/listingProduct");
  return result.json();
}

export default async function Home({ searchParams }: SearchParamProps) {
  const reviews = await getReviews();
  // const firstSixItems = reviews?.slice(0, 6);
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          {/* <ListingProduct /> */}
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h2-bold">
              Get Tailored Reviews: <br /> Discover Your Perfect Match
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Thousends of cool products reviewed in 2024
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore Review</Link>
            </Button>
          </div>

          <Image
            src="https://utfs.io/f/3f73f599-f478-4527-9cf1-280b99ba052b-4r9vpn.jpg"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
          {/* <HomeCarousel /> */}
        </div>
      </section>
      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h3-bold">
          Most Popular Review <br /> By Users
        </h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>
        <Collection />
      </section>
      <section className="bg-primary-50  bg-dotted-pattern bg-contain py-5 md:py-10">
        <BestReviews />
      </section>
      <section className="bg-primary-50  bg-dotted-pattern bg-contain py-5 md:py-10">
        <Blogs />
      </section>
      {/* <section className="wrapper">
        <GridCards />
      </section> */}
    </>
  );
}
