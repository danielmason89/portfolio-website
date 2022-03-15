import React from "react";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Blog from "./pages/Blog";
import GlobalStyle from "./components/GlobalStyle";
import { Switch, Route, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
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
  );
}

export default App;
