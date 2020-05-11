import React from "react";

import Card from "./Card";
import Button from "./Button";

const ToolLinks = (props) => {
  return (
    <Card
      title="Pick a tool to get started"
    >
      <div className="card-deck">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=200"
            className="card-img-top"
            alt="person jumping"
          />
          <div className="card-body">
            <h5 className="card-title">Jump to Conclusions</h5>
            <h6 className="card-subtitle mb-2 text-muted">0-10 mins</h6>
            <p className="card-text">
              Don't have the time, energy or need to evaluate your options? Have
              an algorithm pick one of your options at random. You'll be able to make notes and roll the dice again as many times as you want.
            </p>
            <a
              href={"/dilemmas/" + props.decisionId + "/jump-to-conclusions"}
              className="text-muted stretched-link"
            >
              Let's do this
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1585095949331-5feb1219fd9f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=200"
            className="card-img-top"
            alt="two different hats"
          />
          <div className="card-body">
            <h5 className="card-title">Six Hats</h5>
            <h6 className="card-subtitle mb-2 text-muted">10-30 mins</h6>

            <p className="card-text">
              This method will walk you through evaluating your options from
              several very different perspectives. It can be especially
              helpful for those nebulous issues where there's not a lot of hard
              facts to go off of, or if you're feeling stuck.
            </p>
            <a
              href={"/dilemmas/" + props.decisionId + "/six-hats"}
              className="text-muted stretched-link"
            >
              Let's go
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1453733190371-0a9bedd82893?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=200"
            className="card-img-top"
            alt="classroom blackboard with math formulae"
          />
          <div className="card-body">
            <h5 className="card-title">Methodical Method</h5>
            <h6 className="card-subtitle mb-2 text-muted">30 mins +</h6>

            <p className="card-text">
              Based on the Kepner-Tregoe Matrix, this framework goes into more
              detail. It'll help you narrow down, evaluate and score your
              options against potential outcomes. This is a systematic approach
              that also offers contingency planning.
            </p>
            <a
              href={"/dilemmas/" + props.decisionId + "/methodical-method"}
              className="text-muted stretched-link"
            >
              Take me there
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ToolLinks;
