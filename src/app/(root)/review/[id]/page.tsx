"use client";
import CheckoutButton from "@/components/shared/CheckoutButton";
import Collection from "@/components/shared/Collection";
import { formatDateTime } from "@/lib/utils";
import { useGetSingleReviewQuery } from "@/redux/api/listingProductAPI";
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

const event = {
  _id: "1",
  title: "Event 1",
  description: "Description for Event 1",
  location: "Location 1",
  createdAt: "2024-01-02T12:00:00.000Z",
  imageUrl:
    "http://localhost:3000/_next/image?url=%2Fassets%2Fimages%2FheroReview.jpg&w=1080&q=75",
  startDateTime: "2024-01-03T10:00:00.000Z",
  endDateTime: "2024-01-03T18:00:00.000Z",
  price: "10",
  isFree: false,
  url: "https://example.com/event1",
  category: {
    _id: "category_id_1",
    name: "Technology",
  },
  organizer: {
    _id: "organizer_id_1",
    firstName: "John",
    lastName: "Doe",
  },
};

const EventDetails = ({ params: { id }, searchParams }: SearchParamProps) => {
  // console.log(id, "ReviewID");
  // const event = await getEventById(id);

  // const relatedEvents = await getRelatedEventsByCategory({
  //   categoryId: event.category._id,
  //   eventId: event._id,
  //   page: searchParams.page as string,
  // });

  const { data, isLoading } = useGetSingleReviewQuery(id);

  console.log(data, id, "details");
  const videoUrl =
    "https://www.youtube.com/watch?v=zgGhzuBZOQg&t=46s&ab_channel=JavaScriptMastery";

  const timeAgo = moment(data?.data?.createdAt).fromNow();

  return (
    <>
      <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
        <div className="grid grid-cols-1 2xl:max-w-7xl">
          <Image
            src={data?.data?.images[0]}
            alt="hero image"
            width={1000}
            height={1000}
            className="h-full wrapper min-h-[300px] object-cover object-center"
          />

          <div className="flex w-full flex-col gap-8 p-5 md:p-10">
            <div className="flex flex-col gap-6">
              <h2 className="h2-bold">{data?.data?.title}</h2>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex gap-3">
                  <p className="p-bold-20 rounded-full bg-green-500/10 px-5 py-2 text-green-700">
                    {/* {event.isFree ? "FREE" : `$${event.price}`} */}
                    {`$${data?.data?.price}`}
                  </p>
                  <p className="p-medium-16 rounded-full bg-grey-500/10 px-4 py-2.5 text-grey-500">
                    {data?.data?.category} Category Name
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="p-medium-18 ml-2 mt-2 sm:mt-0">
                by{" "}
                <span className="text-primary-500">
                  {event.organizer.firstName} {event.organizer.lastName}
                </span>
              </p>
              <p>
                <span className="text-primary-500">{timeAgo}</span>
              </p>
            </div>

            {/* <CheckoutButton event={event} /> */}

            <div className="flex flex-col gap-5">
              <div className="flex gap-2 md:gap-3">
                <Image
                  src="/assets/icons/calendar.svg"
                  alt="calendar"
                  width={32}
                  height={32}
                />
                <div className="p-medium-16 lg:p-regular-20 flex flex-wrap items-center">
                  <p>
                    {/* {formatDateTime(event.startDateTime).dateOnly} -{" "} */}
                    {/* {formatDateTime(event.startDateTime).timeOnly} */}
                  </p>
                </div>
              </div>

              <div className="p-regular-20 flex items-center gap-3">
                <Image
                  src="/assets/icons/location.svg"
                  alt="location"
                  width={32}
                  height={32}
                />
                <p className="p-medium-16 lg:p-regular-20">{event.location}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="p-bold-20 text-grey-600">Reviewr Words:</p>
              <p className="p-medium-16 lg:p-regular-18">
                {data?.data?.description}
              </p>
              <p className="p-medium-16 lg:p-regular-18 truncate text-primary-500 underline">
                {event?.url}
              </p>
            </div>
          </div>
          <Image
            src={data?.data?.images[1]}
            alt="Review Image"
            width={1000}
            height={1000}
            className="h-3/4 w-3/4 rounded-3xl wrapper min-h-[300px] object-cover object-center"
          />

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
      <br />
      <hr />
      <hr />
      {/* EVENTS with the same category */}
      <section className="wrapper my-8 flex justify-center sm:flex-col gap-8 md:gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="h3-semibold">Tags</h2>
            <div className="flex">
              {data?.data?.tags?.map((tag) => (
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
            <h2 className="h3-semibold">Share This Post</h2>
            <div className="flex">
              <Image
                src="/assets/icons/location.svg"
                alt="location"
                width={32}
                height={32}
              />
              <Image
                src="/assets/icons/location.svg"
                alt="location"
                width={32}
                height={32}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Admin or Modarator Review Carosel */}
      {/* // 50% on small screens and 33% on larger screens. */}
      <Carousel>
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <ReviewCarosel />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <ReviewCarosel />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <ReviewCarosel />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h3-bold">Related Reviews</h2>
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
