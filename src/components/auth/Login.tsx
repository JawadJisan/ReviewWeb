import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="text-xl font-semibold">Log into your account</h2>
        <p className="mt-2 text-sm text-gray-600">to continue to ReviewWeb</p>
        <div className="mt-6">
          <Button className="mb-3 w-full" variant="outline">
            <GithubIcon className="mr-2 h-5 w-5" />
            Continue with GitHub{"\n                  "}
          </Button>
          <Button className="w-full" variant="outline">
            <ChromeIcon className="mr-2 h-5 w-5" />
            Continue with Google{"\n                  "}
          </Button>
        </div>
        <div className="my-6 flex items-center justify-center">
          <div className="h-px w-full bg-gray-300" />
          <span className="mx-4 text-sm text-gray-500">or</span>
          <div className="h-px w-full bg-gray-300" />
        </div>
        <form className="space-y-4">
          <div>
            <Input placeholder="Username" type="text" value="johndoe" />
          </div>
          <div>
            <Input placeholder="Password" type="password" value="password123" />
          </div>
          <Button className="w-full">LOG IN</Button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-500">Don't have an account?</span>{" "}
          <Link
            className="text-sm text-blue-600 hover:underline"
            href="/auth/signUp"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

function ChromeIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

function GithubIcon(props) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
