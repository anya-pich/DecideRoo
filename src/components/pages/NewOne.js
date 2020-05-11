import React, { useState, useEffect } from "react";

import Info from "../Info";
import Dilemma from "../Dilemma";
import Options from "../Options";
import ToolLinks from "../ToolLinks";

const NewOne = (props) => {
  const [step, setStep] = useState(0);
  const nextStep = () => setStep(step => step+1);

  const [decisionId, setDecisionId] = useState(null);
  const saveDecisionId = (id) => setDecisionId(id);

  return (
    <main className="mb-5">
      {step >= 3 && (
        <ToolLinks {...props} nextStep={nextStep} decisionId={decisionId} />
      )}
      {step >= 2 && (
        <Options {...props} nextStep={nextStep} decisionId={decisionId} />
      )}
      {step >= 1 && (
        <Dilemma
          {...props}
          nextStep={nextStep}
          saveDecisionId={saveDecisionId}
        />
      )}
      <Info
        {...props}
        title={"Decisions can be hard!"}
        body={
          "That's why we've put together a few tools and resources to help you work through your dilemmas. Read more below or dive right in."
        }
        nextStep={nextStep}
      />
    </main>
  );
};

export default NewOne;
