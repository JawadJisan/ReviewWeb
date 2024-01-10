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
import { useUpdateUserMutation, useUsersQuery } from "@/redux/api/userAPI";

export default function TableDemo() {
  const { toast } = useToast();
  const { userId } = getUserInfo() as any;
  const { data, isLoading } = useUsersQuery({});

  const [updateListingStatus] = useUpdateListingStatusMutation();
  const [updateUser] = useUpdateUserMutation();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

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
    console.log({ id: selectedProductId, data: data });
    const res = await updateUser({
      id: selectedProductId,
      data: data.status,
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
            <TableHead className="w-[100px]">Profile</TableHead>
            <TableHead>User Name</TableHead>
            <TableHead className="text-right">email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>
              Update <br /> Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.users?.map((myData: any) => (
            <TableRow key={myData.id}>
              <TableCell className="font-medium">
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>{myData.userName} </TableCell>
              <TableCell className="text-right">{myData.email} </TableCell>
              <TableCell>{myData.role}</TableCell>
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
                              <FormLabel>Select Role</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                // defaultValue={field.value}
                                defaultValue={myData.role}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select user role" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectItem value="user">User</SelectItem>
                                    <SelectItem value="admin">Admin</SelectItem>
                                    <SelectItem value="editor">
                                      Editor
                                    </SelectItem>
                                    <SelectItem value="moderator">
                                      Moderator
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
