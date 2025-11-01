// "use client"; // Required for hooks

// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";
// import { Button } from "../ui/button";

// export default function ToggleButton() {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null; // Prevent hydration issues

//   return (
//     <Button
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//       className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
//       style={{margin:"16px"}}
//     >
//       {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
//     </Button>
//   );
// }
import { useEffect, useState } from "react";

export default function ToggleButton() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.add(theme);
    return () => document.documentElement.classList.remove(theme);
  }, [theme]);

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle Theme
    </button>
  );
}
