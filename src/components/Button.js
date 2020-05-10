import React from "react";

export default function Button(props) {
  function handleClick(e) {
    e.preventDefault();
    return props.callback ? props.callback() :
    console.log("this button isn't hooked up to anything");
  }
  return (
    <button className={props.color ? "btn mx-1 float-right btn-" + props.color
    : "btn mx-1 btn-dark float-right"} type="submit" onClick={handleClick}>
      {props.children || "Next"}
    </button>
  );
}
