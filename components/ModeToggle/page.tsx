"use client";


import Image from "next/image";
import { useTheme } from "../theme/theme-provider";


export default function ModeToggle() {
  const  {theme,toggleTheme}  = useTheme();

  const isDark = theme.mode === "dark";

  return (
    <button onClick={ toggleTheme} className="flex flex-row gap-3 items-center justify-center border-2 border-gray-300 p-2 rounded-2xl"    >
      <Image height={80} width={80} alt="Logo"src={isDark ? "/icons/moon.svg" : "/icons/sun.svg"} className="w-8 h-8"/>
      <p>{isDark ? "Dark Mode" : "Light Mode"}</p>
    </button>
  );
}
