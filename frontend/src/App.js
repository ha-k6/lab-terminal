import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";

import HomeScreen from "./screens/home";
import MatchesScreen from "./screens/matches";
import SigninScreen from "./screens/signin";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/signin">
            <SigninScreen />
          </Route>
          <Route path="/home">
            <HomeScreen />
          </Route>
          <Route path="/">
            <MatchesScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
