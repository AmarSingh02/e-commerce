

import React, { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

export const PraticeTheme = ({ children }) => {
  const [toggle, setToggle] = useState("dark");

  const handleToggle = () => {
    setToggle((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, handleToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

