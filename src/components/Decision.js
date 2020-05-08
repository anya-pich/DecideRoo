import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import Card from './Card';
import Accordion from './Accordion';
import useForm from "./hooks/useForm";
import DecisionModel from "../models/decision";

const Decision = (props) => {
  const step1 = {
    header: "Step 1: Define your dilemma",
    title: "What decision are you working on?",
    text:
      "With supporting text below as a natural lead-in to additional content.",
  };
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(null, null, callback);
  const [resError, setResError] = useState(null);


  const key = "decision";
  const [storedValues, setStoredValues] = useState(JSON.parse(localStorage.getItem(key)));
  useEffect(() => {
    if (storedValues) {
      localStorage.setItem(key, JSON.stringify(storedValues))
    } else {
      localStorage.removeItem(key);
    }
  }, [key, storedValues])
  
  


  function callback() {
    console.log("callback triggered");
    console.log(values);
    setStoredValues(values);
    const newDecision = {
      ...values,
      author: localStorage.getItem('uid')
    };
    DecisionModel.post(newDecision)
      .then((res) => {
        console.log(res.data);
        props.history.push(`/decisions/${res.data._id}`);
      })
      .catch((err) => {
        if (err) console.log(err);
        setResError(err);
      });
  }

  function clear(event) {
    event.preventDefault();
    localStorage.removeItem('decision');
    setStoredValues(null);
  }

  return (
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
        <button onClick={clear} className="btn btn-danger">
          Clear
        </button>
      </form>
    </Card>
  );
};

export default Decision;
