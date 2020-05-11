import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "./Card";
import Accordion from "./Accordion";
import Button from "./Button";
import Option from "./Option";

const Options = (props) => {
  const [dilemmaId, setDilemmaId] = useState(props.match.params.id || null);
  const [data, setData] = useState([{}]);
  const [update, setUpdate] = useState(1);
  
  // fetch options on load and update
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/options?decision=${dilemmaId}`
      );
      setData(response.data);
      console.log(response.data);
    };
    if (dilemmaId) fetchData();
    console.log(update);
  }, [dilemmaId, update]);

  // update container
  const handleUpdate = () => {
    setUpdate((update) => update + 1);
    console.log("handling update");
  };

  return (
      <Card
        title={"What are the options?"}
        body={
          "Write out as many as you can think of at the moment for now. You'll be able to add, edit and delete options as you review them using the various decision-making tools."
        }
      >
        <Option
          dilemmaId={dilemmaId}
          update={handleUpdate}
          setEdit={true}
        />
        {data.map((each) => (
          <Option
            setEdit={false}
            dilemmaId={dilemmaId}
            {...each}
            update={handleUpdate}
            key={each._id || ""}
          />
        ))}
        <br />
        <Button callback={props.nextStep}>Next</Button>
        <Accordion>
          <p>Some info on brainstorming techniques etc</p>
        </Accordion>
      </Card>
  );
};

export default Options;
