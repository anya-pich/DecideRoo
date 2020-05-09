import React from 'react';

import {useAuth} from "../hooks/useAuth";
import DecisionModel from "../../models/decision";
import { Link } from 'react-router-dom';

const ShowAll = (props) => {

	const [dilemmas, setDilemmas] = React.useState([]);

  // get auth state & re-render anytime it changes
  const auth = useAuth();
	// auth.user had the logged in user id

	// get dilemmas from local storage
	const [localStorDilemmas, setLocalStorDilemmas] = React.useState(
    localStorage.getItem('dilemmas') || ''
  );

	// get dilemmas from back end on initial render
	React.useEffect(() => {
		const fetchData = async () => {
			const response = await DecisionModel.getByAuthor(auth.user);
			setDilemmas(response.data);
		}
		fetchData();
	}, [auth.user]);

	// initial setup done
	console.log(dilemmas);
	console.log(localStorDilemmas);
	
	







	return (
		<>
			<h1>Okay</h1>
			{dilemmas.map(each => (
				<div>
					<h1>{each.title}</h1>
					<p></p>
					<a href={"/dilemmas/" + each._id}>View</a>
				</div>
			))}
		</>
	)
}

export default ShowAll;


// function Form() {
//   // 1. Use the name state variable
//   const [name, setName] = React.useState('Mary');

//   // 2. Use an effect for persisting the form
//   React.useEffect(function persistForm() {
//     localStorage.setItem('formData', name);
//   });

//   // 3. Use the surname state variable
//   const [surname, setSurname] = React.useState('Poppins');

//   // 4. Use an effect for updating the title
//   React.useEffect(function updateTitle() {
//     document.title = name + ' ' + surname;
//   });

//   // ...
// }