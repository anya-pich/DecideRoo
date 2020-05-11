import React from "react";

import Dilemma from "../Dilemma";
import Options from "../Options";
import ToolLinks from "../ToolLinks";

const ShowOne = (props) => {
  return (
    <main className="mb-5">
      <Dilemma {...props} />
      <Options {...props} />
      <ToolLinks {...props} />
    </main>
  );
};

export default ShowOne;
