import React, { useState, useEffect } from "react";
import { Routes } from "./Routes";
import ThemeContext, { themes } from "./contexts/ThemeConfig";
import { useLocalStorage } from "./hooks/useLocalStorage";

import "./styles/index.scss";

export default function App() {
  useLocalStorage();

  let currentTheme = localStorage.getItem("theme");
  let setTheme =
    currentTheme !== null ? JSON.parse(currentTheme) : themes.light;
  if (setTheme === "") {
    setTheme = themes.light;
  }
  const [context, setContext] = useState({
    theme: setTheme,
    switchTheme: () => {
      setContext((current) => ({
        ...current,
        theme: current.theme.mode === "light" ? themes.dark : themes.light,
      }));
    },
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(context.theme));
  }, [context]);

  return (
    <ThemeContext.Provider value={context}>
      <div className="app-wrapper">
        <Routes />
      </div>
    </ThemeContext.Provider>
  );
}
