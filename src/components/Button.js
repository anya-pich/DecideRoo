import React from "react";

export default function Button(props) {
  function handleClick(e) {
    e.preventDefault();
    return props.callback ? props.callback() :
    console.log("this button isn't hooked up to anything");
  }
  return (
    <button className={props.color ? "btn mr-1 btn-" + props.color
    : "btn mr-1 btn-primary"} type="submit" onClick={handleClick}>
      {props.children || "Yaaas"}
    </button>
  );
}
