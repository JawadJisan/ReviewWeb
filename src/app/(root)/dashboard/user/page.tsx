import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function Component() {
  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <Avatar>
            <AvatarImage
              alt="abc abc"
              src="/placeholder.svg?height=100&width=100"
            />
            <AvatarFallback>AA</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-semibold">abc abc</h2>
            <p className="text-sm text-gray-500">Email: abc@gmail.com</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <Badge variant="secondary">1 Notification</Badge>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="flex flex-col items-center justify-center p-4 bg-[#E0F7FA] text-center rounded-lg">
          <ListIcon className="text-[#00ACC1] mb-2" />
          <h3 className="text-lg font-medium">Total Listings</h3>
          <p className="text-2xl font-semibold">1</p>
        </Card>
        <Card className="flex flex-col items-center justify-center p-4 bg-[#E8F5E9] text-center rounded-lg">
          <MegaphoneIcon className="text-[#43A047] mb-2" />
          <h3 className="text-lg font-medium">Published Listings</h3>
          <p className="text-2xl font-semibold">0</p>
        </Card>
        <Card className="flex flex-col items-center justify-center p-4 bg-[#FFF3E0] text-center rounded-lg">
          <ClockIcon className="text-[#FB8C00] mb-2" />
          <h3 className="text-lg font-medium">Pending Listings</h3>
          <p className="text-2xl font-semibold">1</p>
        </Card>
        <Card className="flex flex-col items-center justify-center p-4 bg-[#FBE9E7] text-center rounded-lg">
          <FileWarningIcon className="text-[#FF5252] mb-2" />
          <h3 className="text-lg font-medium">Expired Listings</h3>
          <p className="text-2xl font-semibold">0</p>
        </Card>
      </div>
    </div>
  );
}

function ClockIcon(props: any) {
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
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function FileWarningIcon(props: any) {
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
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function ListIcon(props: any) {
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
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  );
}

function MegaphoneIcon(props: any) {
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
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  );
}
