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

  const toogleActive = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  return (
    <div>
      <div className="mt-3">
        <button
          className={active ? "accordion-icon rotate align-middle" : "accordion-icon align-middle"}
          onClick={toogleActive}
        >
          <FaChevronCircleDown />
        </button>
        <span className="text-muted mx-3 align-middle">More info</span>
      </div>
      <div ref={contentRef} className="accordion-content">
        <br /><hr />
        {props.children}
      </div>
    </div>
  );
};

export default Accordion;
