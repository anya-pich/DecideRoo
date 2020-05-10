import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import axios from "axios";

import Card from "./Card";
import Accordion from "./Accordion";
import Button from "./Button";
import Option from "./Option";

const Options = (props) => {
  const [data, setData] = useState([]);
  console.log(props.decisionId);
  
  // fetch options on decisionId change
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/options?decision=${props.decisionId}`);
      setData(response.data);
      console.log(response.data);
    };
    if (props.decisionId) fetchData();
  }, [props.decisionId]);

  const handleSubmit = () => {
    props.nextStep(3);
  }

  return (
    <>
      <Card
        title={"What are your options?"}
        body={
          "Just write down as many as you can think of for now, we'll evaluate them later on and you can always add more later.'"
        }
      >
        <Button callback={handleSubmit}>Next</Button>
				<Option decisionId={props.decisionId} />
        {data.map(each => <Option decisionId={props.decisionId} {...each}/>)}
        <Accordion>
          <p>Some info on brainstorming techniques etc</p>
        </Accordion>
      </Card>
    </>
  );
};

export default Options;
