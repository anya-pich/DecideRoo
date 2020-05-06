import React from "react";
import useForm from "./hooks/useForm";
import validate from "./validation/Auth";
import UserModel from '../models/user';

const Auth = (props) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(null, validate, callback);

  const path = props.match.path;

  function callback() {
    console.log(values, path);
    UserModel.auth(values, path)
      .then((res) => {
        console.log(res.data.data);
        props.setCurrentUser(res.data.data);
        props.history.push("/");
      })
      .catch((err) => {
        if (err) console.log(err);
        
      })
  }

  function valClass(field) {
    return !!touched[field] && !!errors[field]
      ? "form-control is-invalid"
      : !!touched[field] && !errors[field]
      ? "form-control is-valid"
      : "form-control";
	}
	
  return (
    <form noValidate onSubmit={ handleSubmit } className="needs-validation">
      <div className="form-group">
        <label>Email address</label>
        <input
          className={valClass("email")}
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email || ""}
        />
				{path === "/login" ? null :
					<small className="text-muted">
						We'll never share your email with anyone else
					</small>
				}
        <div className="invalid-feedback">{errors.email}</div>
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          className={valClass("password")}
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password || ""}
        />
        <div className="invalid-feedback">{errors.password}</div>
      </div>
			
			{path === "/login" ? null : 
				<div className="form-group">
					<label>Re-enter password</label>
					<input
						className={valClass("password2")}
						type="password"
						placeholder="Re-enter password"
						name="password2"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.password2 || ""}
					/>
					<div className="invalid-feedback">{errors.password2}</div>
				</div>
			}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Auth;
