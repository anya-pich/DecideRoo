import React from "react";
import useForm from "./hooks/useForm";
import validate from "./validation/SignUp";
import {Form, Button} from 'react-bootstrap';

const Test = (props) => {
  const { values, handleChange, handleSubmit, errors } = useForm(
    login,
    validate
  );

  function login() {
    console.log(values);
  }

  return (
		<Form noValidate onSubmit={handleSubmit}>

			<Form.Group controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control 
					type="email" 
					placeholder="Enter email" 
					name="email"
					onChange={handleChange}
					value={values.email || ""}
					// isValid={!errors.email && !!values.email}
					isInvalid={!!errors.email}
				/>
				<Form.Text className="text-muted">
					We'll never share your email with anyone else.
				</Form.Text>
				{/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
				<Form.Control.Feedback type="invalid">
					{errors.email}
				</Form.Control.Feedback>
			</Form.Group>

			<Form.Group controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control 
					type="password" 
					placeholder="Password" 
					name="password"
					onChange={handleChange}
					value={values.password || ""}
					// isValid={!errors.password && !!values.password}
					isInvalid={!!errors.password}
				/>
				<Form.Control.Feedback type="invalid">
					{errors.password}
				</Form.Control.Feedback>
			</Form.Group>
			<Form.Group controlId="formBasicCheckbox">
				<Form.Check type="checkbox" label="Check me out" />
			</Form.Group>
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
  
  );
};

export default Test;
