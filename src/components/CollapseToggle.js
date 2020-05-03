import React from 'react';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import {MdExpandMore, MdExpandLess} from 'react-icons/md';


const CollapseToggle = ({children, eventKey}) => {
	let icon = <MdExpandMore />
	const decoratedOnClick = useAccordionToggle(eventKey, () =>
    icon = <MdExpandLess />
  );
	return (
		<button
			className="float-right"
      type="button"
      onClick={decoratedOnClick}
    >
			{icon}
      {children}
    </button>
	);
}

 
export default CollapseToggle;