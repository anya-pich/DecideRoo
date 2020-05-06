import React, { useState, useEffect } from 'react';
import Accordion from "./Accordion";

const Test = (props) => {

  return(
    <div>
      <Accordion title="A">
        <span className="accordion-text">
        Sit culpa in nostrud nostrud adipisicing sint incididunt aliqua velit ut. Aliqua commodo sint consectetur cupidatat laborum esse ea in quis exercitation anim enim commodo. Incididunt ea quis amet officia nostrud eiusmod ut nisi et laborum est.
        </span>
      </Accordion>
      <Accordion title="B">
        <span className="accordion-text">Duis id eiusmod aliqua commodo anim. Consequat deserunt duis minim et reprehenderit cupidatat dolore labore quis aute. Occaecat consequat ea adipisicing consequat cillum irure aliqua sint velit officia irure ex commodo. Dolore occaecat nisi excepteur in quis mollit eu exercitation consequat est do.</span>
      </Accordion>
      <Accordion title="C">
        <span className="accordion-text">Incididunt magna consectetur in non sunt duis ut consectetur velit dolore reprehenderit. Cupidatat elit do et esse quis sint laboris. Qui ad in tempor eiusmod quis sint amet. Nisi enim sint elit eu ad amet velit consectetur dolore do. Lorem cupidatat exercitation pariatur incididunt consequat consectetur.</span>
      </Accordion>
    </div>
  );
};

export default Test;