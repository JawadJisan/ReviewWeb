"use client";
import { useGetAllReviewsQuery } from "@/redux/api/listingProductAPI";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast, useToast } from "@/components/ui/use-toast";
import {
  useDeleteListingProductMutation,
  useGetListingProductQuery,
} from "@/redux/api/listingProductAPI";
import { getUserInfo } from "@/utils/auth.service";
import Link from "next/link";

import { MdEdit, MdDelete } from "react-icons/md";

const Page = () => {
  const { data: allReviewsAndRatings, isLoading: reviewLoading } =
    useGetAllReviewsQuery({});

  const handleDelete = async (data: any) => {
    // const res = await deleteUser(data.id);
    // console.log(res);
    toast({
      description: "Post Deleted Successfully",
    });
  };

  if (reviewLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="wrapper">
      <Table>
        <TableCaption>All Reviews</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Thumbnail</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="text-left">Review Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allReviewsAndRatings?.data?.map((review: any) => (
            <TableRow key={review.id}>
              <TableCell className="font-medium">
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>{review.title} </TableCell>
              <TableCell className="text-left">{review.description} </TableCell>
              <TableCell> {review.status} </TableCell>
              <TableCell className="flex items-center ">
                {/* <MdDelete className="w-5 h-5 " /> */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">
                      <MdDelete className="w-5 h-5 " />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] bg-primary-50 ">
                    <DialogHeader>
                      <DialogTitle>Delete Review</DialogTitle>
                    </DialogHeader>

                    <DialogFooter>
                      <DialogClose asChild>
                        <Button
                          onClick={() => handleDelete(review)}
                          type="submit"
                          variant="destructive"
                        >
                          Delete
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                {review.status === "approved" ? (
                  ""
                ) : (
                  <MdEdit className="w-5 h-5 ml-3" />
                  // <Link href={`review/${myData.id}/update`}>
                  // </Link>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Page;
