import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { IEvent } from "@/lib/database/models/event.model";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import reviewData from "../../../_data/db.json";
import ListingProduct from "@/components/shared/ListingProduct";
import { useGetListingProductQuery } from "@/redux/api/listingProductAPI";

async function getReviews(): Promise<IEvent[]> {
  const result = await fetch("http://localhost:3000/reviews");
  return result.json();
}

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  // const reviews = await getReviews();

  // console.log(reviews);

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  });

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          {/* <ListingProduct /> */}
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Get Tailored Reviews: Discover Your Perfect Match
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Thousends of cool products reviewed in 2024
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore Review</Link>
            </Button>
          </div>

          <Image
            src="/assets/images/heroReview.jpg"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Most Popular Review <br /> By Users
        </h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        <Collection
          // data={events?.data}
          data={reviewData}
          emptyTitle="No Review Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>

      {/* {reviewData?.map((e) => (
        <p> {e.title} </p>
      ))} */}
    </>
  );
}
