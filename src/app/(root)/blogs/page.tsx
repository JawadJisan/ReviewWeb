"use client";
import ReactQuillText from "@/components/shared/TextEditor";
import Tiptap from "@/components/shared/Tiptap";
import { getUserInfo, isLoggedIn } from "@/utils/auth.service";
import React from "react";

const page = () => {
  console.log("this is blogs page");
  const isUserLoggedIn = isLoggedIn();
  console.log(isUserLoggedIn, "LoginStatus");
  // const { role } = getUserInfo() as any;
  const uInfo = getUserInfo() as any;
  console.log(uInfo, "The quick brown ");
  return (
    <div>
      {/* <Tiptap /> */}
      <ReactQuillText />
    </div>
  );
};

export default page;
