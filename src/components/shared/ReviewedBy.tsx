import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import Image from "next/image";

export default function ReviewedBy() {
  return (
    <div className="max-w-4xl mt-5 wrapper mx-auto p-6 bg-primary-50 rounded-lg ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Reviewed by 1 user</h2>
        <div className="flex space-x-2">
          <div className="flex items-center">
            <label className="mr-2" htmlFor="sort">
              Sort:
            </label>
            <Select>
              <SelectTrigger id="sort">
                <SelectValue placeholder="All Review" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center">
            <label className="mr-2" htmlFor="filter">
              Filter:
            </label>
            <Select>
              <SelectTrigger id="filter">
                <SelectValue placeholder="All Star" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="5star">5 Stars</SelectItem>
                <SelectItem value="4star">4 Stars</SelectItem>
                <SelectItem value="3star">3 Stars</SelectItem>
                <SelectItem value="2star">2 Stars</SelectItem>
                <SelectItem value="1star">1 Star</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <Image
          alt="User Logo"
          className="h-16 w-16 rounded-full"
          height="64"
          src=""
          style={{
            aspectRatio: "64/64",
            objectFit: "cover",
          }}
          width="64"
        />
        <div className="flex-1">
          <div className="flex items-center mb-1">
            <StarIcon className="text-yellow-400 w-5 h-5" />
            <StarIcon className="text-yellow-400 w-5 h-5" />
            <StarIcon className="text-yellow-400 w-5 h-5" />
            <StarIcon className="text-yellow-400 w-5 h-5" />
            <StarIcon className="text-gray-300 w-5 h-5" />
            <span className="ml-2 text-sm font-medium text-gray-700">
              by: admin
            </span>
          </div>
          <div className="text-sm text-gray-500 mb-2">
            September 16, 2022 9:32 am
          </div>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus at
            amet nascetur orci. Id tempor lorem sed id sit commodo.
          </p>
        </div>
      </div>
    </div>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
