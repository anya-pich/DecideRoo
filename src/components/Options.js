import React, {
  useState,
  useEffect,
} from "react";
import axios from "axios";

import Card from "./Card";
import Accordion from "./Accordion";
import Button from "./Button";
import Option from "./Option";

const Options = (props) => {
  const [data, setData] = useState([{}]);
  const [update, setUpdate] = useState(1);
  const [parentId, setParentId] = useState(props.decisionId || props.match.params.id);

  // fetch options on decisionId change
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/options?decision=${parentId}`
      );
      setData(response.data);
      console.log(response.data);
    };
    if (parentId && update) fetchData();
    console.log(update);
  }, [parentId, update]);

  const handleUpdate = () => {
    setUpdate((update) => update + 1);
    console.log("handling update");
  };

  const handleSubmit = () => {
    props.nextStep(3);
  };

  return (
    <>
      <Card
        title={"What are your options?"}
        body={
          "Just write down as many as you can think of for now, we'll evaluate them later on and you can always add more later.'"
        }
        key="options"
      >
        <Option decisionId={parentId} update={handleUpdate} setEdit={true} key="emptyOption" />
        {data.map((each) => (
          <Option
            setEdit={false}
            decisionId={parentId}
            {...each}
            update={handleUpdate}
            key={each._id || ""}
          />
        ))}
        <br />
        <Button callback={handleSubmit}>Next</Button>
        <Accordion>
          <p>Some info on brainstorming techniques etc</p>
        </Accordion>
      </Card>
    </>
  );
};

export default Options;
