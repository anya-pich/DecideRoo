import React from "react";

export default function Button(props) {
  const handleClick = (e) => {
    if (props.callback) {
      e.preventDefault();
      props.callback();
      console.log("button component callback fired");
    } else {
      console.log("button component presumably submitting");
    }
  }
  return (
    <button className={props.color ? "btn ml-1 float-right btn-" + props.color
    : "btn ml-1 btn-dark float-right"} type="submit" onClick={handleClick}>
      {props.children || "Next"}
    </button>
  );
}
