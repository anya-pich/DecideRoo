import React from "react";
import { Switch, Route } from "react-router-dom";

import JumpTo from "../components/pages/JumpTo";
import Mathsy from "../components/pages/Mathsy";
import NotFound from "../components/pages/NotFound";
import ShowOne from "../components/pages/ShowOne";
import SixHats from "../components/pages/SixHats";
import Landing from "../components/pages/Landing";
import NewOne from "../components/pages/NewOne";

import About from "../components/pages/About";
import Test from "../components/Test";
import Auth from "../components/Auth";
import DecisionShow from "../components/DecisionShow";
import Profile from "../components/pages/Profile";

export default () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/new" component={NewOne} />
    <Route exact path="/dilemmas/:id/jump-to-conclusions" component={JumpTo} />
    <Route exact path="/dilemmas/:id/six-hats" component={SixHats} />
    <Route exact path="/dilemmas/:id/methodical-method" component={Mathsy} />
    <Route exact path="/dilemmas/:id" component={ShowOne} />
    <Route path="/show-one" component={ShowOne} />
    <Route path="/jump-to" component={JumpTo} />
    <Route path="/six-hats" component={SixHats} />
    <Route path="/test" component={Test} />
    <Route path="/login" component={Auth} />
    <Route path="/register" component={Auth} />
    <Route path="/profile" component={Profile} />
    <Route exact path="/about" component={About} />
    <Route component={NotFound} />
  </Switch>
);
