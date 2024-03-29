"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { userRegistrationSchema } from "@/lib/validator";
import * as z from "zod";
import { useState } from "react";
import { FiGithub, FiFacebook } from "react-icons/fi";
import { SlSocialGoogle } from "react-icons/sl";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { useSignUpMutation } from "../../redux/api/authAPI";

export default function Component() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [signUp, { isLoading }] = useSignUpMutation();

  const form = useForm<z.infer<typeof userRegistrationSchema>>({
    resolver: zodResolver(userRegistrationSchema),
  });
  const router = useRouter();
  async function onSubmit(values: z.infer<typeof userRegistrationSchema>) {
    console.log(values, "Form Values");
    try {
      const res = await signUp(values).unwrap();
      console.log(res, "signUp response");
      router.push("/auth/signIn");
    } catch (error) {
      // setErrorMessage(error?.message);
      setErrorMessage("something went wrong");
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <div className="flex items-center mb-5">
          <IoArrowBackCircleOutline className="mr-2 h-5 w-5" />
          <Link href="/">
            <p className="text-sm">Back</p>
          </Link>
        </div>
        <h2 className="text-xl font-semibold">Create your account</h2>
        <p className="mt-2 text-sm text-gray-600">to continue to ReviewWeb</p>
        <div className="mt-6">
          <Button className="mb-3 w-full" variant="outline">
            <FiFacebook className="mr-2 h-5 w-5" />
            Continue with Facebook{"\n              "}
          </Button>
          <Button className="w-full" variant="outline">
            <SlSocialGoogle className="mr-2 h-5 w-5" />
            Continue with Google{"\n              "}
          </Button>
        </div>
        <div className="my-6 flex items-center justify-center">
          <div className="h-px w-full bg-gray-300" />
          <span className="mx-4 text-sm text-gray-500">or</span>
          <div className="h-px w-full bg-gray-300" />
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="User Name" {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email address"
                      {...field}
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="relative flex items-center justify-center">
                  <Input
                    placeholder="Password"
                    {...field}
                    type={showPassword ? "text" : "password"}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-2/4 transform -translate-y-2/4"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <BiHide className="mr-2 h-5 w-5 " />
                    ) : (
                      <BiShowAlt className="mr-2 h-5 w-5" />
                    )}
                  </button>
                  <FormMessage />
                </FormItem>
              )}
            />
            {errorMessage && (
              <div className="mt-4 text-center">
                <span className="text-sm text-destructive">{errorMessage}</span>
              </div>
            )}

            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="w-full"
            >
              {form.formState.isSubmitting ? "Creating..." : "Create Account"}
            </Button>
          </form>
        </Form>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-500">Have an account?</span>{" "}
          <Link
            className="text-sm text-blue-600 hover:underline"
            href="/auth/signIn"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
