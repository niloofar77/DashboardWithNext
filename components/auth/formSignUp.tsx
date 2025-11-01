

"use client"
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { User } from 'lucide-react';
import { Eye } from 'lucide-react';
import localFont from 'next/font/local'
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { NextApiRequest, NextApiResponse } from 'next';


export default function SignUpForm() {
  const[showPassword,setShowPassword]=useState(false)
  const signUpSchema = z.object({
    email: z.string().min(5,"حداقل 5 کارکتر باشد"),
    password:z.string().max(20,"حداکثر 20 کارکتر باشد").min(5,"حداقل 5 کارکتر باید باشد"),
    name:z.string().min(5,"حداقل باید 5 کارکتر باشد"),
    lastName:z.string().min(5,"حداقل باید 5 کارکتر باشد"),

  
  });
 
  const{ register,handleSubmit,formState:{errors}}=useForm({
    resolver:zodResolver(signUpSchema)})
  
 
const handleShow=()=>{
  setShowPassword(!showPassword)


}


  // console.log("submitted",data)
  // const token="eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhyX3VzZXIiLCJuYW1lIjoiSFIiLCJmYW1pbHkiOiJBZ2VudCIsImVtYWlsIjoiaHJAbWNpLmlyIiwicGhvbmUiOiIwOTEyMzQ1Njc4OSIsInJvbGUiOlsidXNlcl9hZG1pbiIsImNvbGxlZ2UiLCJyb2xlX2FkbWluIiwicGVybWlzc2lvbl9hZG1pbiIsImRlc2lnbmVyIiwiYXBwcm92ZXIiLCJyZXZpc2VyIiwiaW1wbGVtZW50b3IiXSwibmF0aW9uYWxfY29kZSI6IjAwMTUxMjUyNTAiLCJhaXQiOjE3NDE1OTY1NTMuMzQ4NzM0LCJleHAiOjE3NDE2MDM3NTMuMzQ4NzV9.FY2O2_QrY7jQbRWKnViTt_lEyc4wIVdt60aWwOvr7dg-NxIYfqSpP_EyTT--K_PPg49F-bQxPw6KMJwEEO4EVg\""
  // localStorage.setItem("user",token)
  const onSubmit = async (data: any) => {
    // const res = await fetch('api/auth/signUp', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // });
    // if (res.ok) {
    //   console.log("Signup successful");
    //   // Optionally, redirect or update UI
    // }
  };
  

// pages/api/signup.ts



 
  return (
  

    <div className="flex bg-white shadow-2xl rounded-lg overflow-hidden">

        
            <div className="w-1/2 p-8 flex flex-col justify-center">
      
    
            
              <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
              <CardDescription className="text-gray-500">Please enter your email and password .</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="relative">
                    
                    <Input {...register("name")}id="name" type="text" placeholder=" Name " />
                  
                  </div>
                  <p  style={{color:"red"}}>{errors?.name?.message}</p>
                  <div className="relative">
                    
                    <Input {...register("lastName")} id="lastName" type="text" placeholder=" Last Name" />
                 

                  </div>
                  <p  style={{color:"red"}}>{errors?.lastName?.message}</p>
                  <div className="space-y-2 relative flex justify-items-center">
                    
                    <Input  {...register("email")}id="email" type="email" placeholder="Email" />
                    <User  className="absolute right-2  h-5 w-5 text-gray-400 cursor-pointer " />
                    
                  </div>
                  <p  style={{color:"red"}}>{errors?.email?.message}</p>
                   <div className="space-y-2 relative  flex justify-items-center">
                    
                    <Input  {...register("password")} id="password" type={showPassword?"text":"password"} placeholder="Password" />
                    <Eye   onClick={handleShow} className="absolute right-2  h-5 w-5 text-gray-400 cursor-pointer "/>
                  
                  </div>
                  <p style={{color:"red"}}>{errors?.password?.message}</p>

                  <Button type="submit" className="bg-purple-900 w-1/2">
                      Register
                  </Button>
                

                </form>
              </CardContent>
              <CardFooter className="text-center text-sm text-gray-600">
           You have account ?  <Link href="/login" className="text-purple-600 hover:underline">Login</Link>
          </CardFooter>

          
          
          </div>
          
          <div className="w-1/2 hidden md:block">
              <Image
                src="/img2.jpg" 
                alt="Login Image"
                width={600}
                height={800}
                className="w-full h-full object-cover rounded-r-lg"
              />
          </div>
        </div>
      
      
      
      
  );
}
