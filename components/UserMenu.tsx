import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { userAuth } from "@/context/UserAuthContext";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface UserMenuProps {
  photoUrl: string | null;
  name: string;
}

const UserMenu = ({ photoUrl, name }: UserMenuProps) => {
  const { logOut } = userAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-0 p-0 outline-none">
        <button className="flex items-center text-center gap-2">
          <img
            className="w-10 rounded-full h-10 object-center object-cover"
            src={
              photoUrl ||
              "https://cdn-icons-png.flaticon.com/512/666/666201.png"
            }
            alt="Avatar"
          />
          <span className="font-semibold">{name}</span>
          <img src="/assets/icons/chevron-down.svg" className="w-4" alt="" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60 z-[1000]">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="h-10">
          <Link
            className="w-full flex items-center text-base h-full"
            href="/dashboard"
          >
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="h-10">
          <Link
            className="w-full flex items-center text-base h-full"
            href="/dashboard/settings"
          >
            Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer h-10 text-base"
          onClick={async () => {
            await logOut();
            toast.success("Logged out successfully!");
          }}
        >
          Logout
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="w-full p-0 bg-transparent">
          <Link
            href="/dashboard"
            className="h-12 flex items-center justify-center w-full font-semibold bg-primary border-2 border-b-4 border-r-4 border-neutral-800 text-neutral-800 rounded-md transition-all duration-200 active:scale-95"
          >
            Go to dashboard
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
