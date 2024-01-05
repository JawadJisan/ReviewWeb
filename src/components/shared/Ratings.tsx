export default function Ratings() {
  return (
    <div className="bg-primary-50 wrapper p-4 rounded-lg">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-5">
          <div className="flex items-center justify-between py-2">
            <span className="font-medium">Quality</span>
            <div className="flex items-center">
              <StarIcon className="text-yellow-400" />
              <StarIcon className="text-yellow-400" />
              <StarIcon className="text-yellow-400" />
              <StarIcon className="text-yellow-400" />
              <StarHalfIcon className="text-yellow-400" />
            </div>
            <span className="ml-2 text-sm">4.5 / 5</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="font-medium">Price</span>
            <div className="flex items-center">
              <StarIcon className="text-yellow-400" />
              <StarIcon className="text-yellow-400" />
              <StarIcon className="text-yellow-400" />
              <StarIcon className="text-yellow-400" />
            </div>
            <span className="ml-2 text-sm">4 / 5</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="font-medium">Service</span>
            <div className="flex items-center">
              <StarIcon className="text-yellow-400" />
              <StarIcon className="text-yellow-400" />
              <StarIcon className="text-yellow-400" />
              <StarIcon className="text-yellow-400" />
              <StarHalfIcon className="text-yellow-400" />
            </div>
            <span className="ml-2 text-sm">4.5 / 5</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-4 border rounded-lg">
          <span className="text-4xl font-semibold">4.5</span>
          <span className="text-xl font-semibold">OVERALL</span>
          <div className="flex mt-2">
            <StarIcon className="text-yellow-400" />
            <StarIcon className="text-yellow-400" />
            <StarIcon className="text-yellow-400" />
            <StarIcon className="text-yellow-400" />
            <StarHalfIcon className="text-yellow-400" />
          </div>
          <span className="mt-2 text-sm text-gray-600">Based on 3 ratings</span>
        </div>
      </div>
    </div>
  );
}

function StarHalfIcon(props) {
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
      <path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2" />
    </svg>
  );
}

function StarIcon(props) {
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
