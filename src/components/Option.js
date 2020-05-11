import React, { useState, useEffect } from "react";
import axios from "axios";

const Option = (props) => {
  // const [dilemmaId, setDilemmaId] = useState(props.dilemmaId);
  const [data, setData] = useState(props.title ? {_id: props._id, title: props.title} : {});
  const [isEditing, setIsEditing] = useState(data._id ? false : true);
  const [values, setValues] = useState(data ? data : {});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(data).length === 0) {
      setValues({});
      saveOption();
    } else {
      setIsEditing(false);
      updateOption();
    }
  };

  const handleChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  
  // save to API
  const saveOption = () => {
    const dataObj = { ...values, decision: props.dilemmaId };
    axios
      .post(`${process.env.REACT_APP_API_URL}/options`, dataObj)
      .then((res) => {
        props.update();
      })
      .catch((err) => console.log(err));
  };

  // update to API
  const updateOption = () => {
    const dataObj = { ...values, decision: props.dilemmaId };
    axios
      .put(`${process.env.REACT_APP_API_URL}/options/${props._id}`, dataObj)
      .then((res) => {
        props.update();
      })
      .catch((err) => console.log(err));
  };

  // delete to API
  const handleDelete = (event) => {
    event.preventDefault();
    axios
      .delete(`${process.env.REACT_APP_API_URL}/options/${props._id}`)
      .then((res) => {
        props.update();
      })
      .catch((err) => console.log(err));
  };

  // toggle edit
  const toggleEdit = () => {
    setIsEditing(true);
  }

  return (
    <div className="input-group my-2">
      {isEditing ?
        <input
          className="form-control"
          type="text"
          name="title"
          placeholder="Add new option"
          onChange={handleChange}
          value={values.title || ""}
        />
      :
        <input
          className="form-control"
          type="text"
          name="title"
          value={values.title || ""}
          readOnly
        />
      }
      <div className="input-group-append" id="button-addon4">
        {props._id && (
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
          onClick={isEditing ? handleSubmit : toggleEdit}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default Option;
