import React from "react";
import Moment from "react-moment";

const DilemmaMini = (props) => {
  return (
    <div className="card text-white bg-dark mb-3">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
      </div>
      <div className="card-footer bg-transparent">
        <span className="text-muted">
          Created <Moment fromNow>{props.createdAt}</Moment>
        </span>
        <div className="float-right m-n2">
          {/* <button
            type="button"
            className="btn btn-danger mr-1"
            onClick={props.handleDelete(props._id)}
          >
            Delete
          </button> */}
          <a href={"/dilemmas/" + props._id} className="btn btn-secondary">
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default DilemmaMini;
