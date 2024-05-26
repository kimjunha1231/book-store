import { ThemeContext } from "../../context/themeContext";
import { useContext } from "react";

function ThemeSwitcher() {
  const { themeName, toggleTheme } = useContext(ThemeContext);
  // const toggleTheme = () => {
  //   setThemeName(themeName === "light" ? "dark" : "light");
  // };

  return <button onClick={toggleTheme}>{themeName}</button>;
}

export default ThemeSwitcher;
