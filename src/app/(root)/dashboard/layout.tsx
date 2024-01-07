"use client";
import DashboardNavItems, {
  DashboardLGSideItems,
} from "@/components/shared/DashboardNavItems";
import MobileNav from "@/components/shared/MobileNav";
import MobileNavForDashboard from "@/components/shared/MobileNavForDashboard";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState } from "react";
import { MdDashboard } from "react-icons/md";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <div className="grid h-screen wrapper min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
    <div className="grid wrapper min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      {/* ... Rest of the layout structure */}
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex flex-col gap-2">
          <div className="flex h-[60px] items-center px-6">
            <Link
              className="flex items-center gap-2 font-semibold"
              href="/dashboard"
            >
              <MdDashboard className="mr-2 h-6 w-6" />
              <span className="">Dashboard</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-4 text-sm font-medium">
              <DashboardLGSideItems />
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          {/* ... Header content */}
          <p className="text-center justify-center flex items-center">Header</p>
          <MobileNavForDashboard />
        </header>
        {/* ... */}
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          {/* Page content */}
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
