import React, { useState, useEffect } from "react";
import Decision from './Decision';

const Landing = (props) => {
  


  const step2 = {
    header: "Step 2: Define your options",
    title: "What options are you considering?",
    text:
      "With supporting text below as a natural lead-in to additional content.",
  };

  return (
    <main>
      <Decision {...props} />
    </main>
  );
};

export default Landing;
