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
import { userFormSchema } from "@/lib/validator";
import * as z from "zod";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useUploadThing } from "@/lib/uploadthing";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";
import { FileUploader } from "@/components/shared/FileUploader";
import { Checkbox } from "@/components/ui/checkbox";
import { useUpdateUserMutation, useUserQuery } from "@/redux/api/userAPI";
import { getUserInfo, isLoggedIn } from "@/utils/auth.service";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { useGetCategoryQuery } from "@/redux/api/reviewCategoryAPI";
import { useAddListingProductReviewMutation } from "@/redux/api/listingProductAPI";

const listingFormSchema = z.object({
  title: z.string(),
  price: z.string(),
  category: z.string(),

  amenities: z.array(z.string()),
  tags: z.array(z.string()),

  parking: z.string(),
  management: z.string(),
  description: z.string(),

  images: z.string(),
  videoURL: z.string(),
  /* address */
  address: z.string(),
  state: z.string(),
  zipCode: z.string(),
  /* contact */
  email: z.string().email(),
  phone: z.string(),
  website: z.string().url(),
  /* Other URLs */
  facebook: z.string().url(),
  twitter: z.string().url(),
  gitHub: z.string().url(),
});

const ListingForm = () => {
  const [files, setFiles] = useState<File[]>([]);
  const isUserLoggedIn = isLoggedIn();
  const { userId } = getUserInfo();
  const { data, isLoading } = useUserQuery(userId);
  const router = useRouter();
  const { startUpload } = useUploadThing("imageUploader");
  const [updateUser] = useUpdateUserMutation();

  const [addListingProductReview] = useAddListingProductReviewMutation();

  const { data: categories, isLoading: categoriesLoading } =
    useGetCategoryQuery();
  const form = useForm<z.infer<typeof listingFormSchema>>({
    // defaultValues: {
    //   imageUrl: data?.data?.imageUrl,
    // },
    // resolver: zodResolver(formSchema),
  });

  const [tagsFields, setTagsFields] = useState([""]);
  const [amenitiesFields, setAmenitiesFields] = useState([""]);

  const handleAddField = (type: any) => {
    if (type === "tags") {
      setTagsFields([...tagsFields, ""]);
    } else if (type === "amenities") {
      setAmenitiesFields([...amenitiesFields, ""]);
    }
  };

  const handleRemoveField = (index, type) => {
    if (type === "tags") {
      const newProsFields = [...tagsFields];
      newProsFields.splice(index, 1);
      setTagsFields(newProsFields);
    } else if (type === "amenities") {
      const newConsFields = [...amenitiesFields];
      newConsFields.splice(index, 1);
      setAmenitiesFields(newConsFields);
    }
  };

  const handleFieldChange = (index, value, type) => {
    if (type === "tags") {
      const newProsFields = [...tagsFields];
      newProsFields[index] = value;
      setTagsFields(newProsFields);
    } else if (type === "amenities") {
      const newConsFields = [...amenitiesFields];
      newConsFields[index] = value;
      setAmenitiesFields(newConsFields);
    }
  };

  async function onSubmit(values: z.infer<typeof listingFormSchema>) {
    let uploadedImageUrl = values.images;
    if (files.length > 0) {
      const uploadedImages = await startUpload(files);
      if (!uploadedImages) {
        return;
      }
      uploadedImageUrl = uploadedImages[0].url;
    }
    const finalData = {
      title: values.title,
      price: values.price,
      parking: values.parking,
      management: values.management,
      description: values.description,
      category: values.category,
      videoURL: values.videoURL,
      state: values.state,
      zipCode: values.zipCode,
      email: values.email,
      address: values.address,
      phone: values.phone,
      website: values.website,
      facebook: values.facebook,
      twitter: values.twitter,
      gitHub: values.gitHub,
      images: [uploadedImageUrl],
      amenities: amenitiesFields,
      tags: tagsFields,
      authorID: userId,
    };
    console.log(finalData, "final data");
    try {
      const res = await addListingProductReview(finalData);
      console.log(res, "resData");
      toast({
        description: "Yup! Your Listing was sent to moderator for Aprove",
      });
    } catch (error) {
      console.log(error, "resError");
    }
  }

  useEffect(() => {
    if (!isLoading && !data?.data) {
      router.push("/");
    }
  }, [data, isLoading, router]);

  return (
    // <div className="wrapper my-8 flex h-screen flex-col ">
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Listing Information
        </h3>
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                {/* <FormLabel>Title</FormLabel> */}
                <FormControl>
                  <Input
                    // defaultValue={data?.data?.firstName}
                    placeholder="Title"
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
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    // defaultValue={data?.data?.lastName}
                    placeholder="Price"
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
            name="category"
            render={({ field }) => (
              <FormItem className="w-full ">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories?.data.map((category: any) => (
                      <SelectItem
                        key={category.id}
                        value={category.categoryName}
                      >
                        {category.categoryName}
                      </SelectItem>
                    ))}
                    {/* <SelectItem value="m@google.com">m@google.com</SelectItem> */}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="parking"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    // defaultValue={data?.data?.userName}
                    placeholder="Parking"
                    {...field}
                    className="input-field"
                    // value={data?.data?.userName}
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
            name="management"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 py-2">
                    <Input
                      //   defaultValue={data?.data?.email}
                      placeholder="Management"
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
            name="videoURL"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 py-2">
                    <Input
                      //   defaultValue={data?.data?.email}
                      placeholder="Video URL"
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
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <Textarea
                    // defaultValue={data?.data?.address}
                    placeholder="Description"
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
            name="images"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="">
            <div className="flex items-center mb-2">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Tags
              </h3>
            </div>
            {tagsFields.map((field, index) => (
              <div key={index} className="flex items-center mb-2">
                <Input
                  value={field}
                  placeholder="Write here!"
                  className="input-field"
                  onChange={(e) =>
                    handleFieldChange(index, e.target.value, "tags")
                  }
                />
                <button
                  onClick={() => handleRemoveField(index, "tags")}
                  className="text-red-500 ml-2 focus:outline-none"
                >
                  &#10006;
                </button>
              </div>
            ))}
            <Button
              onClick={() => handleAddField("tags")}
              className="buttonMD mt-2"
            >
              + Add Tags
            </Button>
          </div>
          <div className="">
            <div className="flex items-center mb-2">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Amenities
              </h3>
            </div>
            {amenitiesFields.map((field, index) => (
              <div key={index} className="flex items-center mb-2">
                <Input
                  className="input-field"
                  value={field}
                  placeholder="Write here!"
                  onChange={(e) =>
                    handleFieldChange(index, e.target.value, "amenities")
                  }
                />
                <button
                  onClick={() => handleRemoveField(index, "amenities")}
                  className="text-red-500 ml-2 focus:outline-none"
                >
                  &#10006;
                </button>
              </div>
            ))}
            <Button
              onClick={() => handleAddField("amenities")}
              //   className="mt-2 bg-red-500 text-white"
              className="buttonMD mt-2"
            >
              + Add Amenities
            </Button>
          </div>
        </div>

        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Contact Details
        </h3>
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
                      //   defaultValue={data?.data?.email}
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
            name="phone"
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
                      //   defaultValue={data?.data?.facebook}
                      placeholder="Contact No"
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
            name="website"
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
                      //   defaultValue={data?.data?.linkedIn}
                      placeholder="Website Link"
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

        <h3 className="text-lg font-medium leading-6 text-gray-900">Address</h3>
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="address"
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
                      //   defaultValue={data?.data?.email}
                      placeholder="Address"
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
            name="state"
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
                      //   defaultValue={data?.data?.facebook}
                      placeholder="State"
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
            name="zipCode"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                    <Input
                      //   defaultValue={data?.data?.linkedIn}
                      placeholder="Zip Code"
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

        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Socials URLs
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
                      //   defaultValue={data?.data?.twitter}
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
                      //   defaultValue={data?.data?.other}
                      placeholder="Twitter"
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
            name="gitHub"
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
                      //   defaultValue={data?.data?.other}
                      placeholder="GitHub"
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
          disabled={form.formState.isSubmitting}
          className="button col-span-2 w-full"
        >
          {form.formState.isSubmitting ? "Submiting..." : "Submit Your Listing"}
        </Button>
      </form>
    </Form>
  );
};

export default ListingForm;
