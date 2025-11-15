"use client";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/app/(auth)/login/action";
import ModeToggle from "../ModeToggle/page";
import { useRouter } from "next/navigation";
import { useProfile } from "@/app/contexts/profile/profileContext";
import ChangeLang from "../changeLang/page";


export default function HeaderCustom(props: any) {

  const router=useRouter()
  const{profileUrl,username}=useProfile()
  const goProfile=()=>{
     return  router.push("/dashboard/profile")
  }

  
  return (
    <header className="bg-white dark:bg-black shadow p-4 text-black  dark:text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button onClick={props.toggleSidebar} className="mr-4">
            <Menu className="cursor-pointer" />
          </button>
          <Image height={80} width={80} alt="Logo" src={"/next.svg"} ></Image>
          <ModeToggle></ModeToggle>
          <div>
            <ChangeLang></ChangeLang>
          </div>

        </div>
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-2 cursor-pointer">
              <p id="avatarUsername">{username}</p> 
                <Avatar>
                <AvatarImage src={profileUrl} />
          
                <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <ChevronDown className="w-4 h-4" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem  onClick={goProfile}>Profile</DropdownMenuItem>
                {/* <DropdownMenuItem>Settings</DropdownMenuItem> */}
                <DropdownMenuItem onClick={() => logout()}>
                    Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
