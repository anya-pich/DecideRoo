import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "../components/About";
import Landing from "../components/Landing";
import Mathsy from "../components/Mathsy";
import SixHats from "../components/SixHats";
import JumpTo from "../components/JumpTo";
import NotFound from "../components/NotFound";
import Test from "../components/Test";
import Auth from "../components/Auth";

export default (props) => (
  <Switch>
    <Route
      exact path="/" 
      render={(props) => <Landing {...props} randomprop={props.currentUser} />}
    />
    <Route exact path="/about" component={About} />
    <Route path="/jump-to" component={JumpTo} />
    <Route path="/six-hats" component={SixHats} />
    <Route path="/mathsy" component={Mathsy} />
    <Route path="/test" component={Test} />
    <Route
      path="/login"
      render={(routeProps) => {
        return (
          <Auth
            {...routeProps}
            currentUser={props.currentUser}
            setCurrentUser={props.setCurrentUser}
          />
        );
      }}
    />
    <Route
      path="/register"
      render={(routeProps) => {
        return (
          <Auth
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
