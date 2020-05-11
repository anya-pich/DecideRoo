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
  const [isEditing, setIsEditing] = useState(dilemmaId ? false : true);
  const [options, setOptions] = useState([]);
  const [update, setUpdate] = useState(1);

  const onSubmit = () => {
    setUpdate((update) => update + 1);
    if (Object.keys(data).length === 0) {
      auth.user ? saveDilemma() : localStoreDilemma();
      if (props.nextStep) props.nextStep();
    } else {
      updateDilemma();
    }
  };

  // get object info if there's an id and on change
  useEffect(() => {
    const fetchData = async () => {
      const response = await DecisionModel.getOne(dilemmaId);
      setData(response.data);
      setIsEditing(false);
      console.log(response.data);
    };
    if (dilemmaId) fetchData();
  }, [dilemmaId, update]);

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
        props.history.push("/");
      })
      .catch((err) => console.log(err));
  }

  // go to editing mode
  const editForm = () => {
    setIsEditing(true);
  };
  
  // go to next step
  const nextStep = (e) => {
    e.preventDefault();
    props.nextStep();
  };
  

  return (
    <>
      {isEditing ? (
        <Card title="What do you need to decide?">
          <form noValidate onSubmit={handleSubmit}>
            <label>Dilemma:</label>
            <div className="form-group">
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
            </div>

            <label>Decision:</label>
            <div className="input-group">
              <select className="custom-select" name="chosenOption">
                <option defaultValue>Choose...</option>
                {options.map((each) => (
                  <option value={each._id} key={each._id}>
                    {each.title}
                  </option>
                ))}
              </select>
            </div>

            <Accordion>
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
              </div>
            </Accordion>

            <button type="submit" className="btn mx-1 btn-dark float-right">
              Save
            </button>
            <button
              onClick={deleteDilemma}
              className="btn mx-1 btn-secondary float-right"
            >
              Delete
            </button>
          </form>
        </Card>
      ) : (
        <Card title="Dilemma">
          <form noValidate>
            <label>Here's what you're working on:</label>
            <div className="form-group">
              <textarea
                className="form-control"
                rows="3"
                name="title"
                value={data.title}
                readOnly
              />
            </div>

            <label>Decision:</label>
            <div className="input-group">
              <select className="custom-select" name="chosenOption" disabled>
                {data.chosenOption ? (
                  <option value={data.chosenOption}>{data.chosenOption.title}</option>
                ) : (
                  <option>Choose...</option>
                )}
              </select>
            </div>

            {data.importance ? (
              <div className="form-group mt-3">
                <label>Decision importance:</label>
                <input
                  className="custom-range"
                  type="range"
                  min="1"
                  max="5"
                  name="importance"
                  value={data.importance}
                  readOnly
                />
                <small className="text-muted d-flex justify-content-between">
                  <span>Fairly trivial</span>
                  <span>Serious</span>
                  <span>Life-changing</span>
                </small>
              </div>
            ) : null}

            {data.indecisiveness ? (
              <div className="form-group">
                <label>Indecisiveness level:</label>
                <input
                  className="custom-range"
                  type="range"
                  min="1"
                  max="5"
                  name="indecisiveness"
                  value={data.indecisiveness}
                  readOnly
                />
                <small className="text-muted d-flex justify-content-between">
                  <span>Lost</span>
                  <span>Considering alternatives</span>
                  <span>Resolved</span>
                </small>
              </div>
            ) : null}

            {data.deadline ? (
              <div className="form-group">
                <label>Deadline:</label>
                <input
                  type="text"
                  name="deadline"
                  className="form-control"
                  value={data.deadline}
                  disabled
                />
              </div>
            ) : null}

            <div className="mt-3">
              <button
                onClick={nextStep}
                className="btn ml-1 btn-dark float-right"
              >
                Next
              </button>
              <button
                onClick={editForm}
                className="btn ml-1 btn-secondary float-right"
              >
                Edit
              </button>
              <button
                onClick={deleteDilemma}
                className="btn ml-1 btn-secondary float-right"
              >
                Delete
              </button>
            </div>
          </form>
        </Card>
      )}
    </>
  );
};

export default Dilemma;
