"use client"
import { ThemeContext } from "@emotion/react";
import { createContext, useContext } from "react";
type Theme={
    colors:{
      primary:string,
      secondary:string
    }
  }
  
  const defaultTheme:Theme={
    colors:{
          primary:"#007bff",
          secondary:"36c757d"
    }
  }
  const themeContext=createContext<Theme>(defaultTheme)
  export const ThemeProvider=({children}:{children:React.ReactNode})=>{
    return(
        <ThemeContext.Provider value={defaultTheme}>

            {children}
        </ThemeContext.Provider>
    )

  }
  export const useTheme=()=>useContext(themeContext)