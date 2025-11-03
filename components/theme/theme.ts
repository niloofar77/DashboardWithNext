
export type Theme = {
    mode: "light" | "dark";
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
  };
  
  export const lightTheme: Theme = {
    mode: "light",
    colors: {
      primary: "#007bff",
      secondary: "#36c757",
      background: "#ffffff",
      text: "#000000",
    },
  };
  
  export const darkTheme: Theme = {
    mode: "dark",
    colors: {
      primary: "#4dabf7",
      secondary: "#63e6be",
      background: "#1e1e1e",
      text: "#ffffff",
    },
  };
  