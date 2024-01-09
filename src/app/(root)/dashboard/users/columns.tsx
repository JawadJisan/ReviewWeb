"use client";
import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  useUpdateUserMutation,
  useDeleteUserMutation,
} from "@/redux/api/userAPI";
import { useClickedData } from "@/utils/getClickedData";

export type UserType = {
  id: string;
  fullName: string;
  userName: string;
  role: "user" | "admin" | "editor" | "moderator";
  profileImageUrl: string;
  email: string;
};

// {
//     id: 'e9039205-aef3-4e2a-8cd2-bf49b031d2ae',
//     fullName: null,
//     email: 'abcde@gmail.com',
//     role: 'editor',
//     address: null,
//     profileImageUrl: null,
//     createdAt: '2024-01-07T06:02:39.713Z',
//     updatedAt: '2024-01-07T06:02:39.713Z'
//   }
//

export const columns: ColumnDef<UserType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "userName",
    header: "User Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("userName")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => <div className="lowercase">{row.getValue("role")}</div>,
  },
  {
    accessorKey: "profileImageUrl",
    header: "Image",
    cell: ({ row }) => (
      <div className="">
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { handleDataClick, setSelectedRole } = useClickedData();
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [deleteUser] = useDeleteUserMutation();
      const handleDelete = (userData: any) => {
        deleteUser(userData.id);
        console.log("user Deleted");
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="text-center">
              Actions
            </DropdownMenuLabel>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost">Promote Role</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-primary-50">
                <DialogHeader>
                  <DialogTitle>Update User Role</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      User Name
                    </Label>
                    <Input
                      disabled
                      id="userName"
                      defaultValue={row?.original?.userName}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Role
                    </Label>
                    {/* <Input id="role" defaultValue="" 
                    className="col-span-3" /> */}
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a fruit disabled" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem
                            value="user"
                            // onSelect={() => handleRoleSelection("user")}
                            // onClick={(e) => setSelectedRole(e.target.value)}
                          >
                            User
                          </SelectItem>
                          <SelectItem
                            value="admin"
                            // onSelect={() => handleRoleSelection("admin")}
                          >
                            Admin
                          </SelectItem>
                          <SelectItem
                            value="editor"
                            // onSelect={() => handleRoleSelection("editor")}
                          >
                            Editor
                          </SelectItem>
                          <SelectItem
                            value="moderator"
                            // onSelect={() => handleRoleSelection("moderator")}
                          >
                            Moderator
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button
                      onClick={() => handleDataClick(row.original)}
                      type="submit"
                    >
                      Update
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            {/* </DropdownMenuItem> */}
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Button
                onClick={() => handleDelete(row.original)}
                // type=""
              >
                Delete User
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
// handleDelete
