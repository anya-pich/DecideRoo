import React, { useState, useEffect } from "react";
import axios from "axios";

import useForm from "./hooks/useForm";
import { useAuth } from "./hooks/useAuth";
import DecisionModel from "../models/decision";
import Card from "./Card";
import Accordion from "./Accordion";
import Button from "./Button";

const Dilemma = (props) => {
  const auth = useAuth();
  const [dilemmaId, setDilemmaId] = useState(props.match.params.id || null);
  const [data, setData] = useState({});
  const [isEditing, setIsEditing] = useState(true);
  const [options, setOptions] = useState([]);

  const onSubmit = () => {
    if (!isEditing) {
      setIsEditing(true);
    } else if (Object.keys(data).length === 0) {
      auth.user ? saveDilemma() : localStoreDilemma();
      if (props.nextStep) props.nextStep(2);
    } else {
      updateDilemma();
    }
  };

  // get object info if there's an id
  useEffect(() => {
    const fetchData = async () => {
      const response = await DecisionModel.getOne(dilemmaId);
      setData(response.data);
      setIsEditing(false);
      console.log(response.data);
    };
    if (dilemmaId) fetchData();
  }, [dilemmaId]);
  
  // get all options from api by object
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/options?decision=${data._id}`
      );
      setOptions(response.data);
      console.log(response.data);
    };
    if (data._id) fetchData();
  }, [data]);

  // form handling
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(data, null, onSubmit);

  // save to API
  const saveDilemma = () => {
    const data = { ...values, author: auth.user };
    DecisionModel.post(data)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        props.saveDecisionId(res.data._id);
        setIsEditing(false);
      })
      .catch((err) => console.log(err));
  };

  // update to API
  const updateDilemma = () => {
    const data = { ...values, author: auth.user };
    DecisionModel.update(data, data._id)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        setIsEditing(false);
      })
      .catch((err) => console.log(err));
  };

  // save to local storage
  const localStoreDilemma = () => {
    const data = JSON.stringify(values);
    localStorage.setItem("dilemma", data);
  };

  // delete dilemma (with warning)
  function deleteDilemma(event) {
    event.preventDefault();
    localStorage.removeItem("dilemma");
    DecisionModel.delete(data._id)
      .then((res) => {
        console.log(res.data);
        if (props.nextStep) {
          props.nextStep(0);
        } else {
          props.history.push("/");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      {/* { isEditing ?
        <Card title="What do you need to decide?">

        </Card>
        :
        <Card title={data.title}>

        </Card>
      } */}
      <Card key="dilemma" title={ isEditing ? "What do you need to decide?" : "The Dilemma:"} >
        <form noValidate onSubmit={handleSubmit} className="">
          <div className="form-group">
            {isEditing ? (
              <textarea
                className="form-control"
                rows="3"
                placeholder="Summarize your dilemma here"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title || ""}
                required
              />
            ) : (
              <input
                type="text"
                className="form-control-plaintext"
                name="title"
                value={values.title || ""}
                readOnly
              />
            )}
          </div>
          { options.length < 2 ? null :
            <>
              <label>The Decision:</label>
              <div className="input-group">
                <select className="custom-select" name="chosenOption">
                  <option defaultValue>Choose...</option>
                  {options.map(each => <option value={each._id} key={each._id}>{each.title}</option>)}
                </select>
                {/* <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">Set</button>
                </div> */}
              </div>
            </>
          }
          <Accordion title="A">
            <div className="form-group">
              <label>How important is this decision?</label>
              <input
                className="custom-range"
                type="range"
                min="1"
                max="5"
                name="importance"
                onInput={handleChange}
                onBlur={handleBlur}
                defaultValue={values.importance || ""}
              />
              <small className="text-muted d-flex justify-content-between">
                <span>Fairly trivial</span>
                <span>Serious</span>
                <span>Life-changing</span>
              </small>
            </div>
            <div className="form-group">
              <label>Indecisiveness level:</label>
              <input
                className="custom-range"
                type="range"
                min="1"
                max="5"
                name="indecisiveness"
                onInput={handleChange}
                onBlur={handleBlur}
                defaultValue={values.indecisiveness || ""}
              />
              <small className="text-muted d-flex justify-content-between">
                <span>Lost</span>
                <span>Considering alternatives</span>
                <span>Resolved</span>
              </small>
            </div>
            <div className="form-group">
              <label>Deadline:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="deadline"
                  placeholder="Enter your deadline"
                  className="form-control"
                  value={values.deadline || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
              ) : (
                <input
                  type="text"
                  name="deadline"
                  className="form-control-plaintext"
                  value={values.deadline || ""}
                  readOnly
                />
              )}
            </div>
          </Accordion>
          <button type="submit" className="btn mx-1 btn-dark float-right">
            {isEditing ? "Save" : "Edit"}
          </button>
          <button
            onClick={deleteDilemma}
            className="btn mx-1 btn-secondary float-right"
          >
            Delete
          </button>
        </form>
      </Card>
    </>
  );
};

export default Dilemma;
