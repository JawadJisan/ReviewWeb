import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function BestReviews() {
  return (
    <div className="max-w-5xl wrapper mx-auto my-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
      <div className="sm:col-span-2">
        <h1 className="h3-bold mb-6">Best Review</h1>
        <div className="mb-4">
          <Image
            alt="Sports Category"
            className="w-full rounded-lg mb-2"
            height="200"
            src="https://utfs.io/f/9d27e2da-2a43-40f8-bffa-b8e38314ddfb-etb98h.jpg"
            style={{
              //   aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="250"
          />
          <div className="flex justify-between mt-4 text-sm mb-2">
            <Link href="/blogs/Technologies">
              <span className="text-blue-600 font-semibold">Technology</span>
            </Link>
            <span className="text-gray-500">July 4, 2022</span>
          </div>
          <h2 className="text-xl font-semibold mb-1">
            Cheap Smart Phone Could And Help You Old Food
          </h2>
          <div className="flex items-center justify-between text-gray-500 text-sm">
            <span>By Admin</span>
            <span className="mx-2">·</span>
            <span>Views 478</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <Image
              alt="Article thumbnail"
              className="w-full h-auto rounded-lg mb-2"
              height="150"
              src="https://utfs.io/f/10e96127-813b-4ef4-843c-608a98f9c67a-hsawfe.webp"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150"
            />
            <div className="flex justify-between text-sm mb-1">
              <span className="text-blue-600 font-semibold">Health</span>
              <span className="text-gray-500">July 4, 2022</span>
            </div>
            <h3 className="text-lg font-semibold mb-1">
              Cheap Smart Phone Could And Help You Old Food Safe
            </h3>
            <div className="flex items-center text-gray-500 text-sm">
              <span>By Admin</span>
              <span className="mx-2">·</span>
              <span>Views 245</span>
            </div>
          </div>
          <div className="mb-4">
            <Image
              alt="Article thumbnail"
              className="w-full h-auto rounded-lg mb-2"
              height="150"
              src="https://utfs.io/f/3f73f599-f478-4527-9cf1-280b99ba052b-4r9vpn.jpg"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150"
            />
            <div className="flex justify-between text-sm mb-1">
              <span className="text-blue-600 font-semibold">Technology</span>
              <span className="text-gray-500">July 4, 2022</span>
            </div>
            <h3 className="text-lg font-semibold mb-1">
              Cheap Smart Phone Could And Help You Old Food Safe
            </h3>
            <div className="flex items-center text-gray-500 text-sm">
              <span>By Admin</span>
              <span className="mx-2">·</span>
              <span>Views 162</span>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Trending Topics</h2>
          <div className="grid grid-cols-2 gap-2">
            <Link href="#">
              <Badge className="p-2 hover:bg-cyan-100 " variant="secondary">
                Creative
              </Badge>
            </Link>
            <Link href="#">
              <Badge className="p-2 hover:bg-cyan-100 " variant="secondary">
                Health
              </Badge>
            </Link>
            <Link href="#">
              <Badge className="p-2 hover:bg-cyan-100 " variant="secondary">
                Ideas
              </Badge>
            </Link>
            <Link href="#">
              <Badge className="p-2 hover:bg-cyan-100 " variant="secondary">
                Lifestyle
              </Badge>
            </Link>
            <Link href="#">
              <Badge className="p-2 hover:bg-cyan-100 " variant="secondary">
                Technology
              </Badge>
            </Link>
            <Link href="#">
              <Badge className="p-2 hover:bg-cyan-100 " variant="secondary">
                Travel
              </Badge>
            </Link>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Daily Newsletter</h2>
          <div className="flex flex-col space-y-2">
            <Input placeholder="Please enter your e-mail" type="email" />
            <Button className="bg-red-500 text-white">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
