import React, { useState, useEffect } from "react";

import Card from '../Card';
import Button from '../Button';
import Accordion from '../Accordion';
import Dilemma from "../Dilemma";
import Options from "../Options";
import Random from "../Random";

const JumpTo = (props) => {
	const [step, setStep] = useState(0);
  const nextStep = () => setStep(step => step+1);


	return (
		<main>
			{ step>2 &&
			 <Random {...props} />
			}

			{ step>1 &&
			 <Options {...props} />
			}

			{ step>0 &&
			 <Dilemma {...props} />
			}

			<Card
				title="Jump to Conclusions"
				subtitle="Pick an option at random"
				body="Don't have the time, energy or need to evaluate your options? Have
								an algorithm pick one of your options at random. You'll be able to make notes and roll the dice again as many times as you want."
			>
				<Button callback={nextStep}/>
			</Card>
		</main>
	);
}

export default JumpTo;