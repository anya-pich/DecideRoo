import React, {
  useState,
  useEffect,
} from "react";

import useForm from "./hooks/useForm";
import { useAuth } from "./hooks/useAuth";
import DecisionModel from "../models/decision";
import Card from './Card';
import Accordion from './Accordion';
import Button from './Button';

const Dilemma = (props) => {
  const auth = useAuth();
  const [apiRes, setApiRes] = useState({});
  const [isEditing, setIsEditing] = useState(true);

  const onSubmit = () => {
    if (!isEditing) {
      setIsEditing(true);
    } else if (Object.keys(apiRes).length === 0) {
      auth.user ? saveDilemma() : localStoreDilemma();
      props.nextStep(2);
    } else {
      updateDilemma();
    }
  }
  
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
  const saveDilemma = () => {
    const data = {...values, author: auth.user};
    DecisionModel.post(data)
      .then(res => {
        setApiRes(res.data);
        console.log(res.data);
        props.saveDecisionId(res.data._id);
        setIsEditing(false);
      })
      .catch(err => console.log(err))
  }

  // update to API
  const updateDilemma = () => {
    const data = {...values, author: auth.user};
    DecisionModel.update(data, apiRes._id)
      .then(res => {
        setApiRes(res.data);
        console.log(res.data);
        setIsEditing(false);
      })
      .catch(err => console.log(err))
  }

  // save to local storage
  const localStoreDilemma = () => {
    const data = JSON.stringify(values);
    localStorage.setItem("dilemma", data);
  }
  
  // delete dilemma (with warning)
  function deleteDilemma(event) {
    event.preventDefault();
    localStorage.removeItem('dilemma');
    DecisionModel.delete(apiRes._id)
    .then(res => {
      console.log(res.data);
      props.nextStep(0);
    })
    .catch(err => console.log(err))
  }

  return (
    <Card title={"What do you need to decide?"}>
      <form noValidate onSubmit={handleSubmit} className="">
        <div className="form-group">
          { isEditing ? 
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
            :
            <input
              type="text"
              className="form-control-plaintext"
              name="title"
              value={values.title || ""}
              readOnly
            />
          }
        </div>
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
            { isEditing ? 
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
              :
              <input
                type="text"
                name="deadline"
                className="form-control-plaintext"
                value={values.deadline || ""}
                readOnly
              /> 
            }
          </div>
        </Accordion>
        <button type="submit" className="btn mx-1 btn-dark float-right">
          {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={deleteDilemma} className="btn mx-1 btn-secondary float-right">
          Delete
        </button>
      </form>
    </Card>
  );
};

export default Dilemma;
