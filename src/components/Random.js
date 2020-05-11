import React, { useState, useEffect } from "react";
import axios from "axios";

import DecisionModel from "../models/decision";
import Card from "./Card";

const Random = (props) => {
  const [dilemmaId, setDilemmaId] = useState(props.match.params.id || null);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState({});
  const [resData, setResData] = useState({});

  // get all options from api by object on load
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/options?decision=${dilemmaId}`
      );
      setOptions(response.data);
      console.log(response.data);
    };
    fetchData();
  }, []);

  // get random option
  const getRandom = (e) => {
    e.preventDefault();
    let i = Math.floor(Math.random() * options.length);
    setSelected(options[i]);
  };

  // save selected option to dilemma
  const handleSubmit = (e) => {
    e.preventDefault();
    DecisionModel.update({ chosenOption: selected._id }, dilemmaId)
      .then((res) => {
        console.log(res);
        setResData(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card>
      <div className="d-flex justify-content-center">
        <button
          onClick={getRandom}
          type="button"
          className="btn btn-dark btn-lg text-center m-5"
        >
          Let chance decide
        </button>
      </div>
      {selected ? (
        <>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              readOnly
              value={selected.title}
            />
            <div className="input-group-append" id="button-addon4">
              <button
                className="btn btn-outline-secondary"
                onClick={handleSubmit}
                type="button"
              >
                Accept
              </button>
            </div>
          </div>
          <small class="form-text text-muted">
            {resData.title &&
              selected.title + " was saved as the decision for " + resData.title}
          </small>
        </>
      ) : null}
    </Card>
  );
};

export default Random;
