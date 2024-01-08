// "use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import moment from "moment";

const NewCard = ({ list }: any) => {
  const timeAgo = moment(list?.createdAt).fromNow();
  return (
    <div className="group relative flex min-h-[350px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-primary-50 shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <Link
        href={`/review/${list.id}`}
        style={{ backgroundImage: `url(${list.images[0]})` }}
        className="flex-center rounded-3xl flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
      />
      {/* IS EVENT CREATOR ... */}
      {/* <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
        <Link href={"fas"}>
          <Image src={list.images[0]} alt="edit" width={20} height={20} />
        </Link>
      </div> */}
      <div className="flex flex-col gap-3 p-5 md:gap-4">
        <div className="flex gap-2 justify-between">
          <span className="p-semibold-14 w-min rounded-xl bg-green-100 px-4 py-1 text-green-60">
            <Link href={`/blogs/${list.category}`}>{list.category}</Link>
          </span>
          <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500 line-clamp-1">
            {`$${list.price}`}
          </p>
        </div>
        {/* <p className="p-medium-16 p-medium-18 text-grey-500">{list.price}</p> */}
        <Link href={`/review/${list.id}`}>
          <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">
            {list.title}
          </p>
        </Link>
        <div className="flex-between w-full">
          <p className="p-medium-14 md:p-medium-16 text-grey-600">
            By - David Willy{" "}
          </p>
          {timeAgo}
        </div>
      </div>
    </div>
  );
};

export default NewCard;
