import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import DecisionModel from "../models/decision";
import Card from './Card';


const DecisionShow = (props) => {
  const [resError, setResError] = useState(null);
	const [decisionObject, setDecisionObject] = useState(null);

	useEffect(() => {
		DecisionModel.getOne(props.match.params.id)
			.then((res) => {
				console.log(res.data);
				setDecisionObject(res.data);
			})
			.catch((err) => {
				if (err) console.log(err);
				setResError(err);
			});
	}, [])

	const content = {
		header: "Decision",
		title: "title",
		subtitle: "subtitle",
		text: "bit o' the old text"
	}

	return (
		<Card {...content}>
			
		</Card>
	);
}

export default DecisionShow;