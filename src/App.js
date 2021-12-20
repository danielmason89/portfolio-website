import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Work from "./pages/Work";
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
            <AboutUs />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
