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
import DecisionShow from "../components/DecisionShow";
import Profile from "../components/Profile";


export default () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/decisions/:id" component={DecisionShow} />
    <Route path="/jump-to" component={JumpTo} />
    <Route path="/six-hats" component={SixHats} />
    <Route path="/mathsy" component={Mathsy} />
    <Route path="/test" component={Test} />
    <Route path="/login" component={Auth} />
    <Route path="/register" component={Auth} />
    <Route path="/profile" component={Profile} />
    <Route exact path="/about" component={About} />
    <Route component={NotFound} />
  </Switch>
);
