import React, { useState, useEffect } from "react";
import axios from "axios";

import useForm from "./hooks/useForm";

const Option = (props) => {
  const [isEditing, setIsEditing] = useState(true);
  const [apiRes, setApiRes] = useState({});

  useEffect(() => {
    props.update();
  }, [apiRes]);

  const onSubmit = () => {
    if (!isEditing) {
      setIsEditing(true);
    } else if (Object.keys(apiRes).length === 0) {
      saveOption();
    } else {
      updateOption();
    }
  };

  // form handling
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(null, null, onSubmit);

  // save to API
  const saveOption = () => {
    const data = { ...values, decision: props.decisionId };
    axios
      .post(`${process.env.REACT_APP_API_URL}/options`, data)
      .then((res) => {
        setApiRes(res.data);
        console.log(res.data);
        setIsEditing(false);
      })
      .catch((err) => console.log(err));
  };

  // update to API
  const updateOption = () => {
    const data = { ...values, decision: props.decisionId };
    axios
      .put(`${process.env.REACT_APP_API_URL}/options/${apiRes._id}`, data)
      .then((res) => {
        setApiRes(res.data);
        console.log(res.data);
        setIsEditing(false);
      })
      .catch((err) => console.log(err));
  };

  // delete to API
  const handleDelete = (event) => {
    event.preventDefault();
    axios
      .delete(`${process.env.REACT_APP_API_URL}/options/${apiRes._id}`)
      .then((res) => {
        setApiRes(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="input-group my-2" key={props._id || ""}>
      {isEditing ? (
        <input
          className="form-control"
          type="text"
          name="title"
          placeholder="Potential course of action"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.title || ""}
        />
      ) : (
        <input
          className="form-control"
          type="text"
          name="title"
          value={values.title || ""}
          readOnly
        />
      )}
      <div className="input-group-append" id="button-addon4">
        {apiRes._id && (
          <button
            onClick={handleDelete}
            className="btn btn-outline-secondary"
            type="button"
          >
            Delete
          </button>
        )}
        <button
          className="btn btn-outline-dark"
          type="submit"
          onClick={handleSubmit}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default Option;
