import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import {useAuth} from "./hooks/useAuth";
import DecisionModel from "../models/decision.js";

const Profile = (props) => {
	const [resDecisions, setResDecisions] = useState(null);
	// get auth state & re-render anytime it changes
	const auth = useAuth();

	useEffect(() => {
		if (auth.user) {
			console.log(auth.user);
			DecisionModel.getByAuthor(auth.user)
				.then((res) => {
					console.log(res);
					setResDecisions(res.data);
				})
				.catch((err) => {
					console.log(err);
				})
		}
	}, [auth])


	const [storeThis, setStoreThis] = useLocalStorage('hi', 'there');

	const handleClick = () => {
		setStoreThis(storeThis === "where?" ? "there" : "where?");
	}

	const handleClickDelete = () => {
		setStoreThis(null);
		
	}

	return (
		<>
			<button onClick={handleClick} className="btn btn-danger">Big Red Button</button>
			<button onClick={handleClickDelete} className="btn btn-primary">Big Blue Button</button>
		</>
	);
}

export default Profile;