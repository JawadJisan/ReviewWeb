import Link from "next/link";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Blogs() {
  return (
    <div className="wrapper">
      <h1 className="h3-semibold mb-6">Featured Blogs</h1>

      <Card className="bg-primary-50  dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mx-auto">
        <div className="flex flex-wrap no-underline hover:no-underline">
          <div className="w-full md:w-2/3 rounded-t">
            <Image
              height={150}
              width={750}
              alt="Sunset in the mountains"
              //   className="w-full border-none rounded-t"
              className="h-full w-full border-none rounded-t"
              src="https://utfs.io/f/23ce4229-d8c6-43b0-ab69-a84de30bf1cd-k73wdg.jpg"
            />
          </div>
          <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold">CATEGORY</span>
                <div className="bg-[#ff6347] text-white px-2 py-1 text-xs font-bold rounded">
                  Featured
                </div>
              </div>
              <div className="mt-3">
                <h3 className="font-bold text-2xl text-gray-800 dark:text-gray-100">
                  This is the card title
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </div>
            </div>
            <div className="flex-none mt-auto bg-white dark:bg-gray-800 rounded-b rounded-t-none overflow-hidden p-6">
              <div className="flex items-center justify-between">
                <Link
                  className="text-gray-800 dark:text-gray-100 text-lg font-bold hover:underline"
                  href="#"
                >
                  Read more
                </Link>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  15 minutes ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
