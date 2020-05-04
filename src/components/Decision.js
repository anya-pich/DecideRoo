import React, { Component } from "react";
import Section from "./Section";
import Collapsible from "./Collapsible";
import { Accordion, Card, Form, Row, Col } from "react-bootstrap";
import CollapseToggle from "./CollapseToggle";
import DatePicker from "react-datepicker";
import useInput from "./hooks/useInput";
import useForm from "./hooks/useForm";

export const Decision = (params) => {
  const { values, handleChange, handleSubmit } = useForm();

  return (
    <>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header as="h1">What brings you here today?</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group
                controlId="decisionContent"
                onSubmit={handleSubmit}
              >
                <Form.Label>What decision are you trying to make?</Form.Label>
                {values ? (
                  <Form.Control
                    as="textarea"
                    rows="2"
                    placeholder="Decision summary"
                  />
                ) : (
                  <Form.Control
                    plaintext
                    readOnly
                    defaultValue="email@example.com"
                  />
                )}

                <Form.Text className="text-muted">Nebulous is fine</Form.Text>
              </Form.Group>
            </Form>

            <Form>
              <Form.Group controlId="importance" onChange={handleChange}>
                <Form.Label>Importance:</Form.Label>
                <Form.Control type="range" custom min="1" max="7" />
                <Form.Text className="text-muted d-flex justify-content-between">
                  <span>Trivial</span>
                  <span>Non-lethal</span>
                  <span>Serious</span>
                  <span>Life-altering</span>
                </Form.Text>
              </Form.Group>
            </Form>

            <Form>
              <Form.Group
                controlId="indecisiveness"
                onChange={handleChange}
              >
                <Form.Label>Indecisiveness:</Form.Label>
                <Form.Control type="range" custom min="1" max="7" />
                <Form.Text className="text-muted d-flex justify-content-between">
                  <span>Clueless</span>
                  <span>Tentative</span>
                  <span>Partisan</span>
                  <span>Resolute</span>
                </Form.Text>
              </Form.Group>
            </Form>

            <DatePicker
              selected={this.startDate}
              onChange={(date) => this.setStartDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
            />

            <CollapseToggle eventKey="0"></CollapseToggle>
          </Card.Body>
        </Card>
        <Card>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Some super useful text about how to define decisions
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <CollapseToggle eventKey="1"></CollapseToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>

        <Section
          title={"Card title"}
          body={
            "Dolore proident incididunt esse ad aliquip excepteur eiusmod ex. Excepteur laborum ut aliqua laboris consectetur. Mollit est aliqua labore ipsum occaecat tempor. In laborum reprehenderit sunt amet veniam nulla velit. Minim sint eiusmod consequat id esse exercitation officia tempor Lorem veniam eu ex ea culpa. Ea reprehenderit ad esse amet consequat dolore velit amet fugiat tempor consequat ut ipsum amet. Qui consectetur culpa duis aliquip est ea enim aute nisi tempor adipisicing."
          }
          subtitle={"some more text"}
        />
        <Collapsible></Collapsible>
      </Accordion>
    </>
  );
  // const [isLoading, setIsLoading] = useState(false);
  // const [fields, handleFieldChange] = useInput({
  //   decision: null,
  //   deadline: null,
  //   importance: null,
  //   indecisiveness: null,
  // });

  // const validateForm = () => {
  //   return fields.decision.length > 0;
  // };

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   setIsLoading(true);
  //   try {
  //     // fetch call goes here
  //   } catch (e) {
  //     onError(e);
  //     setIsLoading(false);
  //   }
  // }
};

// class Decision extends Component {
//   state = {
//     decision: null,
//     editable: true,
//     deadline: null,
//     importance: null,
//     indecisiveness: null,
//   };

//   handleChange = (event) => {
//     this.setState({
//       [event.target.id]: event.target.value,
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.setState({
//       editable: false,
//     });
//   };

//   render() {
//     const [startDate, setStartDate] = useState(new Date());
//     return (
//
//       </main>
//     );
//   }
// }

export default Decision;
