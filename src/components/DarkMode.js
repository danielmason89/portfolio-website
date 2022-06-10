import { useState } from "react";

export const DarkMode = () => {
  const [theme2, setTheme] = useState("dark");
  const toggleTheme = () => {
    theme2 === "dark" ? setTheme("light") : setTheme("dark");
  };

  return [theme2, toggleTheme];
};

export default DarkMode;
