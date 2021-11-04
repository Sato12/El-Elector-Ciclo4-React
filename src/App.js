import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Candidatos from "./components/candidatos/Candidatos";
import Home from "./components/misc/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/candidatos" component={Candidatos} />
      </Switch>
    </Router>
  );
}

export default App;
