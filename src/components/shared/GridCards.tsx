// import { Badge } from "@/components/ui/badge";
import Image from "next/image";

// export default function Component() {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       <div className="group relative rounded-lg overflow-hidden">
//         <Image
//           alt="VR Experience"
//           className="absolute inset-0 w-full h-full object-cover"
//           height="256"
//           src="https://utfs.io/f/04170aee-258f-4dc4-b176-e09777c6f627-p5chho.png"
//           style={{
//             aspectRatio: "400/256",
//             objectFit: "cover",
//           }}
//           width="400"
//         />
//         <div className="relative mt-4 p-4 bg-white bg-opacity-75">
//           <Badge variant="secondary">Technology</Badge>
//           <div className="flex items-center mt-1">
//             <span className="ml-2 text-sm text-gray-600">4/5</span>
//           </div>
//           <h3 className="mt-2 text-lg font-semibold text-gray-900">
//             Cheap Smart Phone Could And Help You Old Food Safe
//           </h3>
//           <p className="mt-1 text-sm text-gray-600">By Admin · July 4, 2022</p>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Badge } from "@/components/ui/badge";

export default function Component() {
  return (
    <>
      <div className="card col-span-1">
        <div className="image-container">
          <Image
            alt="Article Image"
            className="card-image"
            src="https://utfs.io/f/04170aee-258f-4dc4-b176-e09777c6f627-p5chho.png"
            width="400"
            height="200"
          />
        </div>
        <div className="card-content">
          <div className="badge-container">
            <span className="badge">Technology</span>
          </div>
          <div className="ratings">
            <span className="rating">4/5</span>
          </div>
          <h3 className="title">
            Cheap Smart Phone Could And Help You Old Food Safe
          </h3>
          <p className="info">By Admin · July 4, 2022</p>
        </div>
      </div>
    </>
  );
}
