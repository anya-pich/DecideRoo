import React, {
  useState,
  useEffect,
} from "react";
import DecisionModel from "../models/decision";
import Card from "./Card";
import Button from "./Button";
import InlineEdit from "./InlineEdit";
import ConfirmDelete from "./ConfirmDelete";
import DecisionEdit from "./DecisionEdit";

const DecisionShow = (props) => {
  const [resError, setResError] = useState(null);
  const [decisionObject, setDecisionObject] = useState(null);
  const [inputValue, setInputValue] = useState("let's just say it's this");
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    DecisionModel.getOne(props.match.params.id)
      .then((res) => {
        console.log(res.data);
        setDecisionObject(res.data);
      })
      .catch((err) => {
        if (err) console.log(err);
        setResError(err);
      });
  }, []);

  const deleteDecision = () => {
    console.log("callback triggered");

    DecisionModel.delete(props.match.params.id)
      .then((res) => {
        console.log(res.data);
        props.history.push(`/`);
      })
      .catch((err) => {
        if (err) console.log(err);
        setResError(err);
      });
  };

  const handleUpdate = (data) => {
    console.log("eddy-ting!");
    DecisionModel.update(data, props.match.params.id)
      .then((res) => {
        console.log(res.data);
        setEditing((editing) => !editing);
        setDecisionObject(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleCancel = (e) => {
    e.preventDefault();
    console.log("handling cancel");
    setEditing(!editing);
  };

  return (
    <>
      {editing ? (
        <Card header={"Edit decision definition"}>
          <DecisionEdit
            callback={handleUpdate}
            initialValues={decisionObject}
            cancel={handleCancel}
          />
        </Card>
      ) : (
        <Card header={"Decision definition"} {...decisionObject}>
          {/* <InlineEdit text={inputValue} onSetText={setInputValue} /> */}

          <Button callback={() => setEditing(!editing)}>Edit</Button>
          {/* <Button>Print</Button> */}
          <ConfirmDelete delete={deleteDecision} />
        </Card>
      )}
    </>
  );
};

export default DecisionShow;
