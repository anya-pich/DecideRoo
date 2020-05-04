export default function validate(values) {
	let errors = {};
	
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Please enter a valid email address";
	}
  
  if (!values.password) {
    errors.password = "Password is required";
  } else if (!/^(?=.*\d).{4,20}$/.test(values.password)) {
    errors.password = "Please use 4-20 characters and include a number";
  }

  return errors;
}
