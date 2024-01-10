"use client";
import { getUserInfo } from "@/utils/auth.service";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const { role } = getUserInfo() as any;
  const router = useRouter();

  useEffect(() => {
    if (role === "admin") {
      router.push("/dashboard/admin");
    } else if (role === "moderator") {
      router.push("/dashboard/moderator");
    } else if (role === "editor") {
      router.push("/dashboard/editor");
    } else if (role === "user") {
      router.push("/dashboard/user");
    }
  }, [role, router]);

  return (
    <div className="text-center">This is the dashboard Content Layout</div>
  );
};

export default Page;
