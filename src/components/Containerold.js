import React, { useState, useEffect } from "react";
import useForm from "./hooks/useForm";
import DecisionModel from "../models/decision";
import Accordion from "./Accordion";
import Card from "./Card";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import Decision from './Decision';
import useLocalStorage from './hooks/useLocalStorage';

const Landing = (props) => {
  const key = "decision";
  const [storedValues, setStoredValues] = useState(JSON.parse(localStorage.getItem(key)));
  useEffect(() => {
    if (storedValues) {
      localStorage.setItem(key, JSON.stringify(storedValues))
    } else {
      localStorage.removeItem(key);
    }
  }, [key, storedValues])
  
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(null, null, callback);
  const [resError, setResError] = useState(null);
  // const [step, setStep] = useState(1);


  function callback() {
    console.log("callback triggered");
    console.log(values);
    setStoredValues(values);
    // DecisionModel.auth(values, path)
    //   .then((res) => {
    //     console.log(res.data.data);
    //     props.setCurrentUser(res.data.data);
    //     props.history.push("/");
    //   })
    //   .catch((err) => {
    //     if (err) console.log(err.response.data.message);
    //     setResError(err.response.data.message);
    //   });
  }

  function clear(event) {
    event.preventDefault();
    localStorage.removeItem('decision');
    setStoredValues(null);
  }

  // const handleStep = (delta) => {
    // setStep(step => step+1);
  // }

  const step1 = {
    header: "Step 1: Define your dilemma",
    title: "What decision are you working on?",
    text:
      "With supporting text below as a natural lead-in to additional content.",
  };

  const step2 = {
    header: "Step 2: Define your options",
    title: "What options are you considering?",
    text:
      "With supporting text below as a natural lead-in to additional content.",
  };

  return (
    <main>
      <Card {...step1}>
        <form noValidate onSubmit={handleSubmit} className="">
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
              <label>When does the decision need to be made?</label>
              <input
                className="form-control"
                type="text"
                name="deadline"
                placeholder="Enter your deadline"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.deadline || ""}
              />
              {/* <DatePicker
                  selected={values.deadline || }
                  onChange={handleChange}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="time"
                  dateFormat="MMMM d, yyyy h:mm aa"
                /> */}
            </div>
          </Accordion>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <button onClick={clear} className="btn btn-danger">Clear</button>
        </form>
      </Card>
    </main>
  );
};

export default Landing;
