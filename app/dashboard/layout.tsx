"use client";
import React, { useState } from "react";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";

import HeaderCustom from "@/components/header/page";

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
    <div className="flex h-screen w-full overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 border-r border-gray-200 h-full overflow-y-auto">
      {showSidebar && (
        <SidebarProvider>
          
                  <AppSidebar />
          
        </SidebarProvider>

        
      )}
         </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header */}
        {/* <header className="bg-white shadow p-4 flex items-center">
          <button onClick={toggleSidebar} className="mr-4">
            <Menu className="cursor-pointer" />
          </button>
          <h1 className="text-xl font-bold">Welcome to the Dashboard</h1>
        </header> */}
        <HeaderCustom toggleSidebar={toggleSidebar}></HeaderCustom>
 
        
        {/* Page Content */}
        <main className="flex-1 p-4 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}