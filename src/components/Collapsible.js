import { TransitionGroup, CSSTransition } from "react-transition-group";
import React, { useState } from "react";

const Collapsible = (props) => {
  const [show, setShow] = useState(false);
  const [toggleOpen, setToggleOpen] = useState(false);

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <button className="btn btn-primary" onClick={() => setShow(!show)}>
            Toggle
          </button>
        </div>
        <CSSTransition
          in={show}
          timeout={{enter:500, exit:300}}
          classNames="accordion"
          unmountOnExit
          onEnter={() => setToggleOpen(true)}
          onExited={() => setToggleOpen(false)}
        >
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <button className="btn btn-primary" onClick={() => setShow(!show)}>
              Toggle
            </button>
          </div>
        </CSSTransition>
        <div className="card-footer">
          <p className="card-text">Footie</p>
        </div>
      </div>
    </div>
  );
};

export default Collapsible;
