import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "../components/About";
import Landing from "../components/Landing";
import Login from "../components/Login";
import Mathsy from "../components/Mathsy";
import SixHats from "../components/SixHats";
import JumpTo from "../components/JumpTo";
import NotFound from "../components/NotFound";

export default (props) => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/about" component={About} />
    <Route path="/jump-to" component={JumpTo} />
    <Route path="/six-hats" component={SixHats} />
    <Route path="/mathsy" component={Mathsy} />
    <Route
      path="/login"
      render={(routeProps) => {
        return (
          <Login
            {...routeProps}
            currentUser={props.currentUser}
            setCurrentUser={props.setCurrentUser}
          />
        );
      }}
    />
    <Route component={NotFound} />
  </Switch>
);
