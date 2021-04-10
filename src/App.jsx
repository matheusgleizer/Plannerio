import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.components";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
