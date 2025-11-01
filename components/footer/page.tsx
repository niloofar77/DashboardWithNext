
// import Image from "next/image";
// import Link from "next/link";
// import ToggleButton from "../ToggleButton/page";
// import { Button } from "../ui/button";
// import { Home, ContactMail, ExitToApp } from "@mui/icons-material"; 

// export default function FooterCustom() {
//     return (
//         <header className="bg-white border border-gray-400 dark:bg-black min-h-11">
//             <div className="container mx-auto px-4 py-2 flex justify-between items-center  min-h-11 ">
                
//                 <div className="flex items-center">
//                     <Image src={"/next.svg"} width={60} height={60} alt="logo" className="mr-4" />
                    
//                 </div>
//                 <div className="flex items-center">
//                    <p>این سایت با نکست ساخته شده است</p>
                    
//                 </div>

              
//                 <nav className="hidden md:flex space-x-6 gap-14">
//                     <Link href={"/"} className="flex items-center text-gray-700 hover:text-blue-600 transition duration-300 font-semibold dark:text-white">
                      
//                         وبلاگ
//                     </Link>
//                     <Link href={"/contact"} className="flex items-center text-gray-700 hover:text-blue-600 transition duration-300  font-semibold  dark:text-white">
                      
//                         تماس با ما
//                     </Link>

//                 </nav>


//             </div>
//         </header>
//     );
// }
"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, Close } from "@mui/icons-material"; 

export default function FooterCustom() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white border border-gray-300 dark:bg-black min-h-11 shadow-md">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                
                {/* Logo */}
                <div className="flex items-center">
                    <Image 
                        src="/next.svg" 
                        width={60} 
                        height={60} 
                        alt="logo" 
                        className="mr-4 transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Text */}
                <p className="text-gray-800 dark:text-gray-300 text-sm md:text-base">
                    این سایت با نکست ساخته شده است
                </p>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 gap-x-6">
                    <Link 
                        href="/" 
                        className="text-gray-700 hover:text-blue-600 dark:text-gray-300 transition-all duration-300 font-semibold"
                    >
                        وبلاگ
                    </Link>
                    <Link 
                        href="/contact" 
                        className="text-gray-700 hover:text-blue-600 dark:text-gray-300 transition-all duration-300 font-semibold"
                    >
                        تماس با ما
                    </Link>
                </nav>

     
            </div>
        </header>
    );
}
