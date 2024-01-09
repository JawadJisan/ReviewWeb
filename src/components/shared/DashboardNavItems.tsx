"use client";
import { roleBasedLinks } from "@/constants";
import { getUserInfo } from "@/utils/auth.service";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MdHome } from "react-icons/md";

const DashboardNavItems = () => {
  const { role } = getUserInfo() as any;
  const pathname = usePathname();
  const links = roleBasedLinks[role] || [];

  return (
    // <ul className="md:flex-between flex w-full flex-col  items-start gap-5 md:flex-row">
    //   {links.map((link: any) => {
    //     const isActive = pathname === link.route;
    //     return (
    //       <li
    //         key={link.route}
    //         className={`${
    //           isActive && "text-primary-500"
    //         }  p-medium-16 whitespace-nowrap`}
    //       >
    //         <Link href={link.route}>{link.label}</Link>
    //       </li>
    //     );
    //   })}
    // </ul>
    <ul className="md:flex-between flex w-full flex-col bg-red-400 items-start gap-5">
      {links.map((link: any) => {
        const isActive = pathname === link.route;
        return (
          <li
            key={link.route}
            className={`${
              isActive && "text-primary-500"
            }  flex-row items-start justify-start p-medium-16 whitespace-nowrap`}
          >
            <Link
              className="flex gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary-500 dark:text-gray-400 dark:hover:text-gray-50"
              href={link.route}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default DashboardNavItems;

export const DashboardLGSideItems = () => {
  const { role } = getUserInfo() as any;
  const pathname = usePathname();
  const links = roleBasedLinks[role] || [];

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5">
      {links.map((link: any) => {
        const isActive = pathname === link.route;
        return (
          <li
            key={link.route}
            className={`${
              isActive && "text-primary-500"
            }  flex-row  items-start justify-start p-medium-16 whitespace-nowrap`}
          >
            <Link
              className="flex gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary-500 dark:text-gray-400 dark:hover:text-gray-50"
              href={link.route}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
