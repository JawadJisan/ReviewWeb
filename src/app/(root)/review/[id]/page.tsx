"use client";
import Collection from "@/components/shared/Collection";
import {
  useGetAllReviewsQuery,
  useGetSingleReviewQuery,
} from "@/redux/api/listingProductAPI";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import moment from "moment";
import VideoPlayer from "@/components/shared/VideoPlayer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ReviewCarosel from "@/components/shared/ReviewCarosel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Ratings from "@/components/shared/Ratings";
import ReviewedBy from "@/components/shared/ReviewedBy";
import SubmitReview from "@/components/shared/SubmitReview";
import { MdFacebook } from "react-icons/md";
import { getUserInfo } from "@/utils/auth.service";

const EventDetails = ({ params: { id } }: SearchParamProps) => {
  const { data, isLoading } = useGetSingleReviewQuery(id);
  const { data: allReviewsAndRatings, isLoading: reviewLoading } =
    useGetAllReviewsQuery(id);

  const { userId } = getUserInfo() as any;

  const filteredReviwe = allReviewsAndRatings?.data?.filter(
    (item) => item.productId == id
  );

  if (isLoading || reviewLoading) {
    return <p>Loading...</p>;
  }

  console.log(allReviewsAndRatings);
  const videoUrl =
    "https://www.youtube.com/watch?v=zgGhzuBZOQg&t=46s&ab_channel=JavaScriptMastery";

  const timeAgo = moment(data?.data?.createdAt).fromNow();

  return (
    <>
      <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
        <div className="grid grid-cols-1 2xl:max-w-3xl">
          <Image
            src={data?.data?.images[0]}
            alt="hero image"
            width={500}
            height={500}
            className="h-full wrapper min-h-[200px] max-h-[300px] object-cover object-center"
          />
          <div className="flex w-full flex-col gap-8 p-5 md:p-10">
            <div className="flex flex-col gap-6">
              <h2 className="h2-bold">{data?.data?.title}</h2>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex gap-3 justify-between  items-center">
                  <p className="p-bold-20 rounded-full  bg-green-500/10 px-5 py-2 text-green-700">
                    {`$${data?.data?.price}`}
                  </p>
                  <p className="p-medium-16 rounded-full bg-grey-500/10 px-4 py-2.5 text-grey-500">
                    {data?.data?.category}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="p-medium-18 ml-2 mt-2 sm:mt-0">
                by{" "}
                <span className="text-primary-500">
                  {data?.data?.firstName || "John"}{" "}
                  {data?.data?.lastName || "Doe"}
                </span>
              </p>
              <p>
                <span className="text-primary-500">{timeAgo}</span>
              </p>
            </div>
            {/* <CheckoutButton event={event} /> */}
            <div className="flex flex-col gap-5">
              <div className="p-regular-20 flex items-center gap-3">
                <Image
                  src="/assets/icons/location.svg"
                  alt="location"
                  width={32}
                  height={32}
                />
                <p className="p-medium-16 lg:p-regular-20">
                  {data?.data.address}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="p-bold-20 text-grey-600">Blogs Description</p>
              <p className="p-medium-16 lg:p-regular-18">
                {data?.data?.description}
              </p>
              <p className="p-medium-16 lg:p-regular-18 truncate text-primary-500 underline">
                {data?.data?.videoURL}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-primary-100 items-center ">
            <p className="p-bold-20 p-3 text-grey-600">
              Wants to Know More About This
            </p>
            <p className="p-bold-15 mb-5 text-grey-600">Please Watch This</p>
            <VideoPlayer videoUrl={videoUrl} />
          </div>
        </div>
      </section>
      <br />
      <hr />
      {/* EVENTS with the same category */}
      <section className="wrapper my-8 flex justify-center sm:flex-col gap-8 md:gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="h3-semibold">Tags</h2>
            <div className="flex">
              {data?.data?.tags?.map((tag: any) => (
                <Button
                  key={tag}
                  variant="default"
                  size="sm"
                  asChild
                  className="sm:w-fit m-2"
                >
                  <Link href={`/blogs/category/${tag}`}>{tag}</Link>
                </Button>
              ))}
            </div>
          </div>
          <div>
            <h2 className="h3-semibold text-right">Share This Post</h2>
            <div className="flex justify-end">
              <div className="w-50 h-50 ">
                <MdFacebook className="text-3xl" />
              </div>
              <div className="w-50 h-50 ">
                <MdFacebook className="text-3xl" />
              </div>
              <div className="w-50 h-50 ">
                <MdFacebook className="text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Admin or Modarator Review Carosel */}

      {filteredReviwe && filteredReviwe.length > 0 ? (
        <Carousel className="wrapper">
          <CarouselContent>
            {filteredReviwe.map((review) => (
              <CarouselItem
                key={review.id}
                className="md:basis-1/2 lg:basis-3/3"
              >
                <ReviewCarosel reviewID={review.id} reviewDetails={review} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      ) : (
        <div className="text-center">
          <p className="h4-medium mb-5 font-semibold">No Reviews Found</p>
        </div>
      )}

      <Ratings />
      {/* <ReviewedBy /> */}
      <SubmitReview productId={id} userId={userId} />
      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        {/* <h2 className="h3-bold">Related Reviews</h2> */}
        {/* <Collection
          data={relatedEvents?.data}
          emptyTitle="No Review Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={3}
          page={searchParams.page as string}
          totalPages={relatedEvents?.totalPages}
        /> */}
      </section>
    </>
  );
};

export default EventDetails;
