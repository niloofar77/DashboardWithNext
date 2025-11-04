import * as React from "react";
import { Inbox, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";



const data = {
  navMain: [
    {
      title: "dashboard",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "Users",
          url: "dashboard/users",
          icon: Inbox,
        },
    
      ],
    },
  ],
};


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router=useRouter()
  
  

const  handleNavgiate= ()=>{
  router.push("/")

  }
  return (
    <Sidebar {...props}  className="bg-white dark:bg-black" >
      <SidebarHeader>
        <SidebarMenu >
          <SidebarMenuItem >
              <Image height={80} width={80} alt="Logo" src={"/next.svg"} onClick={handleNavgiate}></Image>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title} >
                <SidebarMenuButton asChild  >
                  <Link href={item.url} className="font-medium">
                    <item.icon className="w-5 h-5" />
                    <span> {item.title} </span>
                  </Link>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild>
                          <Link href={item.url} className="font-medium">
                            <item.icon className="w-5 h-5" />
                            <span> {item.title} </span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
