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
import { Switch, Route, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const [theme, themeToggler] = useDarkMode();

  // zoom chas 40mins, limit, let me send new zoom link
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
            <Switch location={location} key={location.pathname}>
              <Route path="/" exact strict>
                <Home />
              </Route>
              <Route path="/Work">
                <Work />
              </Route>
              <Route path="/About" exact strict>
                <About />
              </Route>
              <Route path="/Contact" exact strict>
                <Contact />
              </Route>
            </Switch>
          </AnimatePresence>
          <Footer />
        </div>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
