import * as z from "zod";

export const eventFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters")
    .max(400, "Description must be less than 400 characters"),
  location: z
    .string()
    .min(3, "Location must be at least 3 characters")
    .max(400, "Location must be less than 400 characters"),
  imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url(),
});

// export const userFormSchema = z.object({
//   fullName: z.string().nullable(),
//   email: z.string().email(),
//   role: z.string(),
//   address: z.string().nullable(),
//   profileImageUrl: z.string().nullable(),
//   createdAt: z.date(),
//   updatedAt: z.date(),
// });

/* 

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
};
*/
export const userFormSchema = z.object({
  userName: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email().optional(),
  role: z.string().optional(),
  address: z.string().optional(),
  facebook: z.string().optional(),
  twitter: z.string().optional(),
  linkedIn: z.string().optional(),
  other: z.string().optional(),
  imageUrl: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const userRegistrationSchema = z.object({
  userName: z.string().min(3, "User Name must be at least 3 characters"),
  email: z.string(),
  password: z.string().min(6, "password must be 6 words/numbers"),
});
export const userLoginSchema = z.object({
  userName: z.string(),
  password: z.string().min(6, "password must be 6 words/numbers"),
});
