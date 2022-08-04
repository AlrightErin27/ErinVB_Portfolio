// import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>

        <Redirect to="/home" />
      </Router>
    </>
  );
}

export default App;
