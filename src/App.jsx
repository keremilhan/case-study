import Articles from "./components/Articles/Articles";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import theme from "./components/globalStyles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles/Global.styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Slider />
      <Cards />
      <Articles />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
