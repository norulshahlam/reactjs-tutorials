import React, { useContext, useState, createContext } from "react";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }) => {
  const [count, setCount] = useState(1);

  return (
    <ThemeContext.Provider value={{ count, setCount }}>
      {children}
    </ThemeContext.Provider>
  );
};
