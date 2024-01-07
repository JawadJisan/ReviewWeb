"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { eventFormSchema, userFormSchema } from "@/lib/validator";
import * as z from "zod";
import { eventDefaultValues } from "@/constants";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import { useUploadThing } from "@/lib/uploadthing";

import "react-datepicker/dist/react-datepicker.css";

import { useRouter } from "next/navigation";
import { createEvent, updateEvent } from "@/lib/actions/event.actions";
import { IEvent } from "@/lib/database/models/event.model";
import Dropdown from "@/components/shared/Dropdown";
import { FileUploader } from "@/components/shared/FileUploader";
import { Checkbox } from "@/components/ui/checkbox";

type EventFormProps = {
  userId: string;
  type: "Create" | "Update";
  event?: IEvent;
  eventId?: string;
};

export const userDetailsDefaultValue = {
  userName: "",
  firstName: "",
  lastName: "",
  email: "",
  role: "",
  imageUrl: "",
  address: "",
  facebook: "",
  twitter: "",
  linkedIn: "",
  other: "",
};

const DetailsForm = () => {
  const [files, setFiles] = useState<File[]>([]);

  // const initialValues =
  //   event && type === "Update"
  //     ? {
  //         ...event,
  //         startDateTime: new Date(event.startDateTime),
  //         endDateTime: new Date(event.endDateTime),
  //       }
  //     : userDetailsDefaultValue;

  const router = useRouter();

  const { startUpload } = useUploadThing("imageUploader");

  const form = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    defaultValues: userDetailsDefaultValue,
  });

  async function onSubmit(values: z.infer<typeof userFormSchema>) {
    let uploadedImageUrl = values.profileImageUrl;
    if (files.length > 0) {
      const uploadedImages = await startUpload(files);
      if (!uploadedImages) {
        return;
      }
      uploadedImageUrl = uploadedImages[0].url;
    }
  }

  // {
  //     id: 'e9039205-aef3-4e2a-8cd2-bf49b031d2ae',
  //     fullName: null,
  //     email: 'abcde@gmail.com',
  //     role: 'editor',
  //     address: null,
  //     profileImageUrl: null,
  //     createdAt: '2024-01-07T06:02:39.713Z',
  //     updatedAt: '2024-01-07T06:02:39.713Z'
  //   }
  //

  return (
    // <div className="wrapper my-8 flex h-screen flex-col ">
    <div className="">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Account Details
          </h3>
          <div className="flex flex-col gap-5 md:flex-row">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="First Name"
                      {...field}
                      className="input-field"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Last Name"
                      {...field}
                      className="input-field"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="User Role"
                      {...field}
                      className="input-field"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="User Name"
                      {...field}
                      className="input-field"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                      <Image
                        src="/assets/icons/location-grey.svg"
                        alt="calendar"
                        width={24}
                        height={24}
                      />

                      <Input
                        placeholder="Email"
                        {...field}
                        className="input-field"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col gap-5 md:flex-row">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="h-72">
                    <Textarea
                      placeholder="Address"
                      {...field}
                      className="textarea rounded-2xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="profileImageUrl"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="">
                    <FileUploader
                      onFieldChange={field.onChange}
                      imageUrl={field.value}
                      setFiles={setFiles}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* <div>
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                      <Image
                        src="/assets/icons/dollar.svg"
                        alt="dollar"
                        width={24}
                        height={24}
                        className="filter-grey"
                      />
                      <Input
                        type="number"
                        placeholder="Price"
                        {...field}
                        className="p-regular-16 border-0 bg-grey-50 outline-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                      <FormField
                        control={form.control}
                        name="isFree"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="flex items-center">
                                <label
                                  htmlFor="isFree"
                                  className="whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  Free Ticket
                                </label>
                                <Checkbox
                                  onCheckedChange={field.onChange}
                                  checked={field.value}
                                  id="isFree"
                                  className="mr-2 h-5 w-5 border-2 border-primary-500"
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div> */}

          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Social Profiles
          </h3>
          <div className="flex flex-col gap-5 md:flex-row">
            <FormField
              control={form.control}
              name="facebook"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                      <Image
                        src="/assets/icons/link.svg"
                        alt="link"
                        width={24}
                        height={24}
                      />

                      <Input
                        placeholder="Facebook"
                        {...field}
                        className="input-field"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="linkedIn"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                      <Image
                        src="/assets/icons/link.svg"
                        alt="link"
                        width={24}
                        height={24}
                      />

                      <Input
                        placeholder="URL"
                        {...field}
                        className="input-field"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
            <FormField
              control={form.control}
              name="twitter"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                      <Image
                        src="/assets/icons/link.svg"
                        alt="link"
                        width={24}
                        height={24}
                      />

                      <Input
                        placeholder="URL"
                        {...field}
                        className="input-field"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="other"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                      <Image
                        src="/assets/icons/link.svg"
                        alt="link"
                        width={24}
                        height={24}
                      />

                      <Input
                        placeholder="URL"
                        {...field}
                        className="input-field"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            // disabled={form.formState.isSubmitting}
            className="button col-span-2 w-full"
          >
            {/* {form.formState.isSubmitting ? "Submitting..." : `${type} Review `} */}
            Update Account
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default DetailsForm;
