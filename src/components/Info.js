import React, {
  useState,
  useEffect,
} from "react";

import Card from './Card';
import Button from './Button';
import Accordion from './Accordion';

const Info = (props) => {
  
  const handleClick = () => {
    props.nextStep(1);
  }

  return (
    <Card title={props.title} body={props.body}>
				<Button callback={handleClick}>Next</Button>
    </Card>
  );
};

export default Info;
