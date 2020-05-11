import React, { useState, useEffect } from "react";

import { useAuth } from "../hooks/useAuth";
import DecisionModel from "../../models/decision";
import DilemmaMini from "../DilemmaMini";
import Container from "../Container";

const Profile = (props) => {
	const [dilemmas, setDilemmas] = useState([]);
  const [update, setUpdate] = useState(1);

  // get auth state & re-render anytime it changes
  const auth = useAuth();

  // get dilemmas from local storage
  const [localStorDilemmas, setLocalStorDilemmas] = useState(
    localStorage.getItem("dilemmas") || ""
  );

  // get dilemmas from back end on initial render & when dilemmas changes
  useEffect(() => {
    const fetchData = async () => {
      const response = await DecisionModel.getByAuthor(auth.user);
      setDilemmas(response.data);
    };
    fetchData();
	}, [auth.user, update]);

  // initial setup done
  console.log(dilemmas);
	console.log(localStorDilemmas);
	
	// delete post callback
	const handleDelete = (event, id) => {
		event.preventDefault();
		DecisionModel.delete(id)
			.then(res => {
				console.log(res.data);
				setUpdate(update => update+1);
			})
			.catch(err => console.log(err))
	}

  return (
    <Container>
      <h3 className="text-white-50">Saved Items</h3>
      <p className="text-white">
        See the dilemmas you've been working on or start a new one below.
      </p>
      <a href="/new" className="btn btn-dark">
        New Dilemma
      </a>
      <hr />
      {dilemmas.map((each) => (
        <DilemmaMini key={each._id} {...each} handleDelete={handleDelete} />
      ))}
    </Container>
  );
};

export default Profile;
