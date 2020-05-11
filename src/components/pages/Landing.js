import React, { useState, useEffect } from "react";
import Dilemma from '../Dilemma';

const Landing = (props) => {
  


  const step2 = {
    header: "Step 2: Define your options",
    title: "What options are you considering?",
    text:
      "With supporting text below as a natural lead-in to additional content.",
  };

  return (
    <main>
      <Dilemma {...props} />
    </main>
  );
};

export default Landing;
