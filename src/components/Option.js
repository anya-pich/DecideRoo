import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import axios from "axios";

import useForm from "./hooks/useForm";

const Option = (props) => {
  const [isEditing, setIsEditing] = useState(true);
  const [apiRes, setApiRes] = useState({});

  const onSubmit = () => {
    if (!isEditing) {
      setIsEditing(true);
    } else if (Object.keys(apiRes).length === 0) {
      saveOption();
    } else {
      updateOption();
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
    axios.put(`${process.env.REACT_APP_API_URL}/options/${props.decisionId}`, data)
      .then(res => {
        setApiRes(res.data);
        console.log(res.data);
        setIsEditing(false);
      })
      .catch(err => console.log(err))
  }

  // delete to API
  const deleteOption = (event) => {
    event.preventDefault();
    axios.delete(`${process.env.REACT_APP_API_URL}/options/${props.decisionId}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err))
  }

  return (
    <div key={props._id || ""}>
      {isEditing ? (
        <form>
					
          <input
						className="form-control"
              type="text"
              name="deadline"
              placeholder="Enter your deadline"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.deadline || ""}
					/>
          <button type="submit" className="btn mx-1 btn-dark float-right">
          Add
        </button>
				</form>
				
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default Option;
