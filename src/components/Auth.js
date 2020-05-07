import React from "react";
import useForm from "./hooks/useForm";
import {useAuth} from "./hooks/useAuth";
import validateSignup from "./validation/signup";
import validateLogin from "./validation/login";

const Auth = (props) => {
  const path = props.match.path;
  const validate = path === "/login" ? validateLogin : validateSignup;

  // get auth state & re-render anytime it changes
  const auth = useAuth();

  // form processing hook takes initial values, validation function and callback function
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(null, validate, callback);

  function callback() {
    // console.log(values, path);
    auth.authenticate(values, path);
    props.history.push("/");
  }

  function valClass(field) {
    return auth.resError ? "form-control is-invalid"
      : !!touched[field] && !!errors[field] ? "form-control is-invalid"
      : !!touched[field] && !errors[field] ? "form-control is-valid"
      : "form-control";
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="needs-validation">
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
          required
        />
        {path === "/login" ? null : (
          <small className="text-muted">
            We'll never share your email with anyone else
          </small>
        )}
        <div className="invalid-feedback">{errors.email || auth.resError}</div>
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
          required
        />
        <div className="invalid-feedback">{errors.password || auth.resError}</div>
      </div>

      {path === "/login" ? null : (
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
            required={path === "/login" ? false : true}
          />
          <div className="invalid-feedback">{errors.password2}</div>
        </div>
      )}

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Auth;
