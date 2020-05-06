import React, { useState, useRef, useEffect } from "react";
import { FaChevronCircleDown } from "react-icons/fa";

const Accordion = (props) => {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toogleActive = () => {
    setActive(!active);
  };

  return (
    <div className="">
      <button
        className={active ? "accordion-icon rotate" : "accordion-icon"}
        onClick={toogleActive}
      >
        <FaChevronCircleDown />
      </button>
      <div ref={contentRef} className="accordion-content">
        <br /><hr />
        {props.children}
        <hr />
      </div>
    </div>
  );
};

export default Accordion;
