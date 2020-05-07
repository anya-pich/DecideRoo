import React from "react";

const Card = (props) => {
  return (
    <div className="card">
			<div className="card-header">
				{props.header}
			</div>
      <div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
				<p className="card-text">{props.text}</p>
				{props.children}
				{/* <button type="button" className="btn btn-secondary mr-2">Back</button>
				<button type="button" className="btn btn-primary">Next</button> */}
			</div>

    </div>
  );
};

export default Card;
