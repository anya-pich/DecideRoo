import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import Card from "./Card";
import Accordion from "./Accordion";
import useForm from "./hooks/useForm";
import DecisionModel from "../models/decision";

const DecisionEdit = ({initialValues, callback, cancel}) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialValues, null, callback);
  const [resError, setResError] = useState(null);

  return (
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
      <button onClick={cancel} className="btn btn-danger">
        Cancel
      </button>
    </form>
  );
};

export default DecisionEdit;
