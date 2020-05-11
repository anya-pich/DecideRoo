import React from "react";
import Moment from "react-moment";

const DilemmaMini = (props) => {
  // const deletePost = props._id => props.handleDelete(props._id);

  return (
    <div className="card text-white bg-dark mb-3">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        {/* <h6 className="card-subtitle mb-2 text-muted">{props.options.length} options</h6> */}
        <p className="card-text">{props.description}</p>
        {props.chosenOption && <p className="text-muted">Decision selected</p>}
      </div>
      <div className="card-footer bg-transparent">
        <span className="text-muted">
          Created <Moment fromNow>{props.createdAt}</Moment>
        </span>
        <div className="float-right m-n2">
          <button
            type="button"
            className="btn btn-dark mr-1"
            onClick={(event) => props.handleDelete(event, props._id)}
          >
            Delete
          </button>
          <a href={"/dilemmas/" + props._id} className="btn btn-secondary">
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default DilemmaMini;
