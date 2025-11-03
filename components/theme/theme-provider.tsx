"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Theme, lightTheme, darkTheme } from "./theme";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  // Load from localStorage at startup
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setTheme(darkTheme);
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.add("light");

    }
  
    

  }, []);

   const toggleTheme = () => {
    const nextMode = theme.mode === "dark" ? "light" : "dark";
    const newTheme = nextMode === "dark" ? darkTheme : lightTheme;

    setTheme(newTheme);

    localStorage.setItem("theme", nextMode);

    if (nextMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


export const useTheme = () => useContext(ThemeContext);