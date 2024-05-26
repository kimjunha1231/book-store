import Detail from "./pages/Detail";
import Layout from "./components/layout/Layout";
import { GlobalStyle } from "./style/global";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./style/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyle themeName="dark" />
        <Layout children={<Detail />} />
      </ThemeProvider>
    </>
  );
}

export default App;
