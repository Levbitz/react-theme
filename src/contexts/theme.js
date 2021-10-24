import { createContext, useState, useEffect } from "react";
import { themes } from "./themes";

// const themes = {
//   dark: {
//     backgroundColor: "black",
//     color: "white",
//     heading: "red",
//   },
//   light: {
//     backgroundColor: "white",
//     color: "black",
//     heading: "black",
//   },
// };

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    localStorage.setItem("isDark", JSON.stringify(!isDark));
    setIsDark(!isDark);
  };
  const theme = isDark ? themes.dark : themes.light;

  useEffect(() => {
    const isDark = localStorage.getItem("isDark") === "true";
    setIsDark(isDark);
  }, []);

  return (
    <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
