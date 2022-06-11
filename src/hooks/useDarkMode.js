import { useState, useEffect, createContext } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("dark");
  const [mountedComponent, setMountedComponent] = useState(false);
  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);

    console.log("setMode", mode);

    setTheme(mode);
  };

  const themeToggler = () => {
    console.log("themeToggler", theme);
    theme === "dark" ? setMode("light") : setMode("dark");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");

    console.log("localTheme", localTheme);
    localTheme ? setTheme(localTheme) : setMode("dark");
    setMountedComponent(true);
  }, []);
  return [theme, themeToggler, mountedComponent];
};

export const AppContext = createContext();
