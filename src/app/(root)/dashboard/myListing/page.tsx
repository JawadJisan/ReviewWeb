"use client";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
import { useToast } from "@/components/ui/use-toast";
import {
  useDeleteListingProductMutation,
  useGetListingProductQuery,
} from "@/redux/api/listingProductAPI";
import { getUserInfo } from "@/utils/auth.service";

import { MdEdit, MdDelete } from "react-icons/md";
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
];

export default function TableDemo() {
  const { toast } = useToast();
  const { userId } = getUserInfo() as any;
  const { data, isLoading } = useGetListingProductQuery();
  const [deleteUser] = useDeleteListingProductMutation();
  const filteredData = data?.listingProducts?.filter(
    (p) => p.authorID === userId
  );
  const handleDelete = async (data: any) => {
    const res = await deleteUser(data.id);
    console.log(res);
    toast({
      description: "Post Deleted Successfully",
    });
  };
  return (
    <div className="wrapper">
      <Table>
        <TableCaption>Your Listing Products & Reviews</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Thumbnail</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead>
              Approved <br /> Status
            </TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData?.map((myData) => (
            <TableRow key={myData.id}>
              <TableCell className="font-medium">
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>{myData.title} </TableCell>
              <TableCell className="text-right">{myData.price} </TableCell>
              <TableCell> {myData.status} </TableCell>
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
                      <DialogTitle>Delete Your Post</DialogTitle>
                    </DialogHeader>

                    <DialogFooter>
                      <DialogClose asChild>
                        <Button
                          onClick={() => handleDelete(myData)}
                          type="submit"
                          variant="destructive"
                        >
                          Delete
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                {myData.status === "approved" ? (
                  ""
                ) : (
                  <MdEdit className="w-5 h-5 ml-3" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
