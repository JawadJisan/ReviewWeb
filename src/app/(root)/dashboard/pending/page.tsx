"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MdBrowserUpdated } from "react-icons/md";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import {
  useDeleteListingProductMutation,
  useGetListingProductQuery,
  useUpdateListingStatusMutation,
} from "@/redux/api/listingProductAPI";
import { getUserInfo } from "@/utils/auth.service";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function TableDemo() {
  const { toast } = useToast();
  const { userId } = getUserInfo() as any;
  const { data, isLoading } = useGetListingProductQuery({});
  const [updateListingStatus] = useUpdateListingStatusMutation();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const filteredData = data?.listingProducts?.filter(
    (p: any) => p.status === "pending" || p.status === "rejected"
  );

  const form = useForm<z.infer<typeof FormSchema>>({
    // resolver: zodResolver(FormSchema),
  });
  const FormSchema = z.object({
    status: z.string({
      required_error: "Please Select a Status for Update",
    }),
  });

  const selectedProductId = selectedProduct?.id;

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const res = await updateListingStatus({
      id: selectedProductId,
      data: data,
    });
    toast({
      title: "Listing Status Updated Successfully",
    });
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="wrapper">
      <Table className="wrapper">
        <TableCaption>Your Listing Products & Reviews</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Thumbnail</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>
              Update <br /> Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData?.map((myData: any) => (
            <TableRow key={myData.id}>
              <TableCell className="font-medium">
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>{myData.title} </TableCell>
              <TableCell className="text-right">{myData.price} </TableCell>
              <TableCell>{myData.status}</TableCell>
              <TableCell>
                {/* <Dialog> */}
                <Dialog onOpenChange={() => setSelectedProduct(myData)}>
                  <DialogTrigger asChild>
                    <Button variant="outline">
                      Update
                      <MdBrowserUpdated className="h-4 ml-2 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] bg-primary-50">
                    <DialogHeader>
                      <DialogTitle className="text-center">
                        Update Status
                      </DialogTitle>
                    </DialogHeader>
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-2/3 space-y-6"
                      >
                        <FormField
                          control={form.control}
                          name="status"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Status</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                // defaultValue={field.value}
                                defaultValue={myData.status}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a verified email to display" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectItem value="pending">
                                      Pending
                                    </SelectItem>
                                    <SelectItem value="approved">
                                      Approved
                                    </SelectItem>
                                    <SelectItem value="rejected">
                                      Rejected
                                    </SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <DialogClose asChild>
                          <Button type="submit">Update Status</Button>
                        </DialogClose>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>
              </TableCell>
              <TableCell className="flex items-center "></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
