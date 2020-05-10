import React from "react";

const Card = (props) => {
  return (
    <div className="card p-3 my-4">
      <div className="card-body">
        <h5 className="card-title mb-4">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
        <p className="card-text">{props.body}</p>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
