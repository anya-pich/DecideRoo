import React, { useState, useEffect } from "react";

import { useAuth } from "../hooks/useAuth";
import DecisionModel from "../../models/decision";
import DilemmaMini from "../DilemmaMini";
import Container from "../Container";

const ShowAll = (props) => {
  const [dilemmas, setDilemmas] = useState([]);

  // get auth state & re-render anytime it changes
  const auth = useAuth();
  // auth.user had the logged in user id

  // get dilemmas from local storage
  const [localStorDilemmas, setLocalStorDilemmas] = useState(
    localStorage.getItem("dilemmas") || ""
  );

  // get dilemmas from back end on initial render
  useEffect(() => {
    const fetchData = async () => {
      const response = await DecisionModel.getByAuthor(auth.user);
      setDilemmas(response.data);
    };
    fetchData();
  }, [auth.user]);

  // initial setup done
  console.log(dilemmas);
  console.log(localStorDilemmas);

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
        <DilemmaMini key={each._id} {...each} />
      ))}
    </Container>
  );
};

export default ShowAll;

// function Form() {
//   // 1. Use the name state variable
//   const [name, setName] = useState('Mary');

//   // 2. Use an effect for persisting the form
//   useEffect(function persistForm() {
//     localStorage.setItem('formData', name);
//   });

//   // 3. Use the surname state variable
//   const [surname, setSurname] = useState('Poppins');

//   // 4. Use an effect for updating the title
//   useEffect(function updateTitle() {
//     document.title = name + ' ' + surname;
//   });

//   // ...
// }
