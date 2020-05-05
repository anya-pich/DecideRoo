import React, { useState, useEffect } from 'react';
import Collapsible from "./Collapsible";

const Test = (props) => {
  const [show, setShow] = useState(false)

  const handleShow = () => {
    console.log('click');
    setShow(!show);
  }

  return(
    <>
      <Collapsible />
    </>
  );
};

export default Test;


// <div>
// <Accordion
//   title="What is your return policy?"
//   content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// />
// <Accordion
//   title="Which languages does you support?"
//   content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// />
// <Accordion
//   title="Can I use a custom domain?"
//   content="
// <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
// </br>
// <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
// </br>
// <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
// />
// </div>