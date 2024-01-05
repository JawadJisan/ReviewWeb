// "user client";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Providers from "@/lib/Providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Review Web",
  description: "Get Tailored Reviews: Discover Your Perfect Match",
  icons: {
    icon: "/assets/images/newLogos.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /* // <Provider store={store}> */
    <Providers>
      <ClerkProvider>
        <html lang="en">
          <body className={poppins.variable}>{children}</body>
        </html>
      </ClerkProvider>
      {/* // </Provider> */}
    </Providers>
  );
}
