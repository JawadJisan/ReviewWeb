// "use client";
import { DashboardLayout } from "@/components/shared/DashboardLayout";
import React from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function page() {
  return (
    <div className="wrapper">
      <p>Account Menu</p>
      <DashboardLayout />
    </div>
  );
}
