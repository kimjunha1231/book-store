import Home from "./pages/Home";
import Layout from "./components/layout/Layout";

import ThemeSwitcher from "./components/header/ThemeSwitcher";

import { BookStoreThemeProvider, ThemeContext } from "./context/themeContext";

function App() {
  return (
    <BookStoreThemeProvider>
      <ThemeSwitcher />
      <Layout children={<Home />} />
    </BookStoreThemeProvider>
  );
}

export default App;
