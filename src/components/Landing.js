import React, { useState, useEffect } from "react";
import Accordion from './Accordion';

const Landing = (props) => {
  
  return (
    <main>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
          <Accordion title="A">
            <h5 className="card-title">Collapsed content</h5>
            <p className="card-text">
            Sit culpa in nostrud nostrud adipisicing sint incididunt aliqua velit ut. Aliqua commodo sint consectetur cupidatat laborum esse ea in quis exercitation anim enim commodo. Incididunt ea quis amet officia nostrud eiusmod ut nisi et laborum est.
            </p>
          </Accordion>
        </div>

      </div>
    </main>
  );
}

export default Landing;
