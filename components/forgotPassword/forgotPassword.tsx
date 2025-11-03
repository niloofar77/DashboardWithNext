

"use client";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { User, Eye } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useActionState, useState } from "react";
import { useTheme } from "../theme/theme-provider";
import { login } from "@/app/(auth)/login/action";

export default function ForgotPasswordForm() {
  const theme=useTheme()
  const forgotPasswordSchema = z.object({
    email: z.string().min(5, "حداقل 5 کاراکتر باشد"),
   
  });
  const[state,loginAction]=useActionState(login,undefined)

  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const handleShow = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data: any) => {
    console.log("submitted", data);
  };

  return (

      <div className="flex bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* <h1 style={{color:theme.colors.primary}}>client router page</h1> */}
        {/* Left Side - Login Form */}
        <div className="w-1/2 p-8 flex flex-col justify-center h-[600px]">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
            <CardDescription className="text-gray-500">Please enter your email and password .</CardDescription>
          </CardHeader>

          <CardContent>
            <form className="space-y-4" action={loginAction}>
              
            <div className="flex justify-between text-sm text-gray-500">
                <p>
                  If you forgot your password ? please enter your email .
                </p>
               
              </div>
              <div className="relative">
                <Input {...register("email")} id="email" type="email" placeholder="m@example.com" className="w-full bg-gray-100 px-4 py-2 rounded-md" />
                <User className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
              </div>
              {state?.errors.password&&(
                <p className="text-red-500">{state.errors.password}</p>
              )}
     


              <Button type="submit" className="w-full bg-purple-900 text-white py-2 rounded-md">Login</Button>
            </form>

       

          </CardContent>

        </div>

        {/* Right Side - Image */}
        <div className="w-1/2 hidden md:block">
          <Image
            src="/img2.jpg" 
            alt="Login Image"
            width={600}
            height={800}
            priority
            className="w-full h-full object-cover"
          />
        </div>

      </div>
  
  );
}
