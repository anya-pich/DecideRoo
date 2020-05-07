import React, { useState, useEffect } from "react";
import useForm from "./hooks/useForm";
import DecisionModel from "../models/decision";
import Accordion from "./Accordion";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import Decision from './Decision';

const Landing = (props) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(null, null, pizza);
  const [resError, setResError] = useState(null);

  function pizza() {
    console.log('callback triggered');
    
    console.log(values);
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

  return (
    <main>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <hr />
          <h1 className="card-title">What decision are you working on?</h1>
          <Accordion title="A">
            <h5 className="card-title">Collapsed content</h5>
            <p className="card-text">
              Sit culpa in nostrud nostrud adipisicing sint incididunt aliqua
              velit ut. Aliqua commodo sint consectetur cupidatat laborum esse
              ea in quis exercitation anim enim commodo. Incididunt ea quis amet
              officia nostrud eiusmod ut nisi et laborum est.
            </p>
          </Accordion>
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
            <button type="submit" className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Landing;
