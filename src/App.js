import React from 'react';
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
import Work from './pages/Work';
import GlobalStyle from './components/GlobalStyle';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/about">
          <AboutUs />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
