

// "use client";
// import Image from "next/image";
// import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { User, Eye } from "lucide-react";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { useActionState, useState } from "react";


// export default function LoginForm() {

//   const loginSchema = z.object({
//     email: z.string().min(5, "حداقل 5 کاراکتر باشد"),
//     password: z.string().max(20, "حداکثر 20 کاراکتر باشد").min(5, "حداقل 5 کاراکتر باشد"),
//   });


//   const [showPassword, setShowPassword] = useState(false);
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: zodResolver(loginSchema),
//   });

//   const handleShow = () => {
//     setShowPassword(!showPassword);
//   };

//   const onSubmit = (data: any) => {
//     console.log("submitted", data);
//     localStorage.setItem("AUTH_USER_TOKEN","cccccccccccccccc")
//   };

//   return (
//     <>

//       <div className="flex bg-white shadow-2xl rounded-lg overflow-hidden">
    
//         <div className="w-1/2 p-8 flex flex-col justify-center h-[600px]">
//           <CardHeader className="text-center">
//             <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
//             <CardDescription className="text-gray-500">Please enter your email and password .</CardDescription>
//           </CardHeader>

//           <CardContent>
//             <form className="space-y-4"  onSubmit={handleSubmit(onSubmit)}>
//               <div className="relative">
//                 <Input {...register("email")} id="email" type="email" placeholder="m@example.com" className="w-full bg-gray-100 px-4 py-2 rounded-md" />
//                 <User className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
//               </div>
//               {/* {state?.errors.password&&(
//                 <p className="text-red-500">{state.errors.password}</p>
//               )} */}
              
//               <div className="relative">
//                 <Input {...register("password")} id="password" type={showPassword ? "text" : "password"} placeholder="Password" className="w-full bg-gray-100 px-4 py-2 rounded-md" />
//                 <Eye onClick={handleShow} className="absolute right-3 top-3 h-5 w-5 text-gray-400 cursor-pointer" />
//               </div>

//               <div className="flex justify-between text-sm text-gray-500">
//                 <span></span> 
//                 <Link href="#" className="text-purple-600 hover:underline">Forgot your password?</Link>
//               </div>

//               <Button type="submit" className="w-full bg-purple-900 text-white py-2 rounded-md">Login</Button>
//             </form>

       

//           </CardContent>

//           <CardFooter className="text-center text-sm text-gray-600">
//             Don't have an account? <Link href="/signUp" className="text-purple-600 hover:underline">Sign up</Link>
//           </CardFooter>
//         </div>

     
//         <div className="w-1/2 hidden md:block">
//           <Image
//             src="/img2.jpg" 
//             alt="Login Image"
//             width={600}
//             height={800}
//             priority
//             className="w-full h-full object-cover"
//           />
//         </div>
        

//       </div>
//       </>
//   );
// }
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "@/app/(auth)/login/action";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { User, Eye } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const LoginForm = () => {
    const loginSchema = z.object({
    email: z.string().min(5, "حداقل 5 کاراکتر باشد"),
    password: z.string().max(20, "حداکثر 20 کاراکتر باشد").min(5, "حداقل 5 کاراکتر باشد"),
  });

  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),

    
  });

  const handleShow = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data: any) => {
 
    const res = await login(data);
    
    if (res.errors) {
  
      console.log(res.errors);
    } else {
 
      window.location.href = "/dashboard";
    }
  };

  return (

        <>

      <div className="flex bg-white shadow-2xl rounded-lg overflow-hidden">
    
        <div className="w-1/2 p-8 flex flex-col justify-center h-[600px]">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
            <CardDescription className="text-gray-500">Please enter your email and password .</CardDescription>
          </CardHeader>

          <CardContent>
            <form className="space-y-4"  onSubmit={handleSubmit(onSubmit)}>
              <div className="relative">
                <Input {...register("email")} id="email" type="email" placeholder="m@example.com" className="w-full bg-gray-100 px-4 py-2 rounded-md" />
                <User className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
              </div>
              {/* {state?.errors.password&&(
                <p className="text-red-500">{state.errors.password}</p>
              )} */}
              
              <div className="relative">
                <Input {...register("password")} id="password" type={showPassword ? "text" : "password"} placeholder="Password" className="w-full bg-gray-100 px-4 py-2 rounded-md" />
                <Eye onClick={handleShow} className="absolute right-3 top-3 h-5 w-5 text-gray-400 cursor-pointer" />
              </div>

              <div className="flex justify-between text-sm text-gray-500">
                <span></span> 
                <Link href="#" className="text-purple-600 hover:underline">Forgot your password?</Link>
              </div>

              <Button type="submit" className="w-full bg-purple-900 text-white py-2 rounded-md">Login</Button>
            </form>

       

          </CardContent>

          <CardFooter className="text-center text-sm text-gray-600">
            Don't have an account? <Link href="/signUp" className="text-purple-600 hover:underline">Sign up</Link>
          </CardFooter>
        </div>

     
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
      </>
  );
};

export default LoginForm;
