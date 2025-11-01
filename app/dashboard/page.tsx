
"use client"
import React from "react";
import { ClipboardMinus } from 'lucide-react';
import { ChartCustom } from "@/components/chartCustom/page";
import { AreaChartCustom } from "@/components/areaChartCustom/page";
import { PieCharCustom } from "@/components/pieChartCustom/page";
import { logout } from "../(auth)/login/action";
export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
        <p className="text-gray-600">
          Welcome to your project dashboard. Here you can find all the information about your project.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Dashboard cards */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex flex-row gap-2" ><ClipboardMinus />
            <h3 className="font-medium mb-2">Getting Started</h3></div>
          
          <div>
          <p className="text-gray-600 text-sm">
            Learn how to set up and configure your new project.
          </p>
          </div>
    
         
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
         
          <div className="flex flex-row gap-2" ><ClipboardMinus />
          <h3 className="font-medium mb-2">Documentation</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Access comprehensive documentation for your project.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex flex-row gap-2" ><ClipboardMinus />
          <h3 className="font-medium mb-2">Documentation</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Find additional resources and examples.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
      <div className=" bg-white p-6 rounded-lg shadow-sm border border-gray-200 mt-2">
        <ChartCustom></ChartCustom>
      </div>
      <div className="  mt-2">
        <AreaChartCustom/>
      </div>
      <div className=" mt-2">
        <PieCharCustom></PieCharCustom>
      </div>
      </div>
   
    </div>
  );
}