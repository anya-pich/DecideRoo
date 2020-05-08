import React from "react";

const Card = ({header, title, subtitle, text, children}) => {
  return (
    <div className="card">
			<div className="card-header">
				{header}
			</div>
      <div className="card-body">
				<h5 className="card-title">{title}</h5>
				<h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
				<p className="card-text">{text}</p>
				{children}
				{/* <button type="button" className="btn btn-secondary mr-2">Back</button>
				<button type="button" className="btn btn-primary">Next</button> */}
			</div>

    </div>
  );
};

export default Card;
