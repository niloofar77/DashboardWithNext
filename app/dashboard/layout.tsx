
"use client";
import React, { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import HeaderCustom from "@/components/header/page";
import { ProfileProvider } from "../contexts/profile/profileContext";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showSidebar, setShowSidebar] = useState(true);
  
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  
  return (
    <ProfileProvider>
      <div className="flex h-screen w-full overflow-hidden bg-white dark:bg-black">
      
        <div  className={`w-64 bg-gray-100 border-r border-gray-200 h-full overflow-y-auto text-black dark:text-white ${showSidebar ? '' : 'hidden'}`} >
          <SidebarProvider>
            <AppSidebar />
          </SidebarProvider>
        </div>

        <div className="flex-1 flex flex-col h-full overflow-hidden bg-white dark:bg-black shadow p-4 text-black dark:text-white ">
          <HeaderCustom toggleSidebar={toggleSidebar} />
          <main className="flex-1 p-4 overflow-y-auto text-black dark:text-white bg-white dark:bg-black">
            {children}
          </main>
        </div>
      </div>
    </ProfileProvider>
  );
}
