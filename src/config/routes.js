import React from "react";
import { Switch, Route } from "react-router-dom";

import JumpTo from "../components/containers/JumpTo";
import Mathsy from "../components/containers/Mathsy";
import NotFound from "../components/containers/NotFound";
import ShowAll from "../components/containers/ShowAll";
import ShowOne from "../components/containers/ShowOne";
import SixHats from "../components/containers/SixHats";
import Landing from "../components/containers/Landing";
import NewOne from "../components/containers/NewOne";

import About from "../components/About";
import Test from "../components/Test";
import Auth from "../components/Auth";
import DecisionShow from "../components/DecisionShow";
import Profile from "../components/Profile";

export default () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/new" component={NewOne} />
    <Route path="/dilemmas/:id" component={DecisionShow} />
    <Route path="/show-all" component={ShowAll} />
    <Route path="/show-one" component={ShowOne} />
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
