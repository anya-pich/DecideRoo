import React from "react";
import useForm from "./hooks/useForm";
import validate from "./validation/Auth";
import {Form, Button} from 'react-bootstrap';

const Auth = (props) => {
	const {
		values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
	} = useForm(null, validate, signup)

  function signup() {
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
					onBlur={handleBlur}
					value={values.email || ""}
					isValid={!!touched.email && !errors.email}
					isInvalid={!!touched.email && !!errors.email}
				/>
				<Form.Text className="text-muted">
					We'll never share your email with anyone else
				</Form.Text>
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
					onBlur={handleBlur}
					value={values.password || ""}
					isValid={!!touched.password && !errors.password}
					isInvalid={!!touched.password && !!errors.password}
				/>
				<Form.Control.Feedback type="invalid">
					{errors.password}
				</Form.Control.Feedback>
			</Form.Group>

			
			<Form.Group controlId="formBasicPassword">
				<Form.Label>Re-enter password</Form.Label>
				<Form.Control 
					type="password" 
					placeholder="Re-enter password" 
					name="password2"
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.password2 || ""}
					isValid={!!touched.password2 && !errors.password2}
					isInvalid={!!touched.password2 && !!errors.password2}
				/>
				<Form.Control.Feedback type="invalid">
					{errors.password2}
				</Form.Control.Feedback>
			</Form.Group>

			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
  
  );
};

export default Auth;