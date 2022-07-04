import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Blog from "./pages/Blog";
import { ThemeProvider } from "styled-components";
import { useDarkMode, AppContext } from "./hooks/useDarkMode";
import { GlobalStyle, lightTheme, darkTheme } from "./components/GlobalStyle";
import { Routes, Route } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const [theme, themeToggler] = useDarkMode();

  //

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  console.log("App Theme", theme, themeMode);
  return (
    <ThemeProvider theme={themeMode}>
      <AppContext.Provider value={(theme, themeToggler)}>
        <div className="App">
          <GlobalStyle />
          <Nav themeToggler={themeToggler} />
          <AnimatePresence exitBeforeEnter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Work" element={<Work />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
