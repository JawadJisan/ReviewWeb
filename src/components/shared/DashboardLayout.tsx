"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";

export function DashboardLayout() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-[100%] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">
            <NavItems />

            <Sheet>
              <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
                <Image
                  src="/assets/images/logo.svg"
                  alt="logo"
                  width={128}
                  height={38}
                />
                <Separator className="border border-gray-50" />
                <NavItems />
              </SheetContent>
            </Sheet>
          </span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
