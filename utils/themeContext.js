import React from "react";
const defaultTheme = { theme: "theme-light" };

export const ThemeContext = React.createContext(defaultTheme);

// function to toggle theme, default theme = light
export default function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Use React Use Context to share global theme data
export const useTheme = () => {
  return React.useContext(ThemeContext);
};
