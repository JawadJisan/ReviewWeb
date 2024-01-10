// import Image from "next/image";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="border-t">
//       <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
//         <Link href="/">
//           <Image
//             src="/assets/images/newLogos.png"
//             alt="logo"
//             width={128}
//             height={38}
//           />
//         </Link>

//         <p>@2024 ReviewWeb. All Rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Eiiz5eziT28
 */
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center bg-cyan-50 text-black px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        <div>
          <h3 className="font-semibold text-lg mb-2">About Us</h3>
          <p className="text-sm">
            We are a leading company in the industry, committed to providing
            high-quality products and exceptional customer service. Our mission
            is to empower our customers and help them reach their goals.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
          <p className="text-sm">
            Email: info@company.com
            <br />
            Phone: (123) 456-7890
            <br />
            Address: 123 Main St, City, State, 12345
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#">
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link href="#">
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link href="#">
              <InstagramIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link className="hover:underline" href="#">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Products
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Services
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Blog
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
          <div className="text-sm">
            <Link className="hover:underline mr-4" href="#">
              Privacy Policy
            </Link>
            <Link className="hover:underline" href="#">
              Terms of Service
            </Link>
          </div>
          <div className="text-sm">© 2024 ReviewWeb. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}

function FacebookIcon(props: any) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon(props: any) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
