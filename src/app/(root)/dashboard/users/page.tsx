import { useUsersQuery } from "@/redux/api/userAPI";
import { columns } from "./columns";
import { DataTableDemo } from "./data-table";
import { getBaseUrl } from "@/helpers/config/envConfig";

/* 
{
    id: 'e9039205-aef3-4e2a-8cd2-bf49b031d2ae',
    fullName: null,
    email: 'abcde@gmail.com',
    role: 'editor',
    address: null,
    profileImageUrl: null,
    createdAt: '2024-01-07T06:02:39.713Z',
    updatedAt: '2024-01-07T06:02:39.713Z'
  }
*/
export default async function DemoPage() {
  // const data = await getData();
  const baseURL = getBaseUrl();
  const res = await fetch(`${baseURL}/users`, {
    cache: "no-store",
  });
  const { data: userData } = await res.json();

  // console.log(userData, "userData");

  return (
    <div className="container h-full  mx-auto py-10">
      <DataTableDemo columns={columns} data={userData} />
    </div>
  );
}
