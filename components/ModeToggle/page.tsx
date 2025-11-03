"use client";


import Image from "next/image";
import { useTheme } from "../theme/theme-provider";


export default function ModeToggle() {
  const  {theme,toggleTheme}  = useTheme();

  const isDark = theme.mode === "dark";

  return (
    <button
      onClick={ toggleTheme}
      className="flex flex-row gap-3 items-center justify-center border-2 border-gray-600 p-2 rounded-lg"
    >
      <Image
        height={80}
        width={80}
        alt="Logo"
        src={isDark ? "/icons/moon.svg" : "/icons/sun.svg"}
        className="w-8 h-8"
      />
      <p>{isDark ? "Dark Mode" : "Light Mode"}</p>
    </button>
  );
}
