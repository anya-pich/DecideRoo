import React, { Component } from 'react';
import Section from "./Section";
import Collapsible from "./Collapsible";
import { Accordion, Card, Form, Row, Col } from "react-bootstrap";
import CollapseToggle from "./CollapseToggle";

class Decision extends Component {
  state = {
    decision: null,
    editable: true,
    deadline: null,
    importance: null,
    indecisiveness: null,
	};

	handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });     
  };
	
	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({
      editable: false,
		})
	}

  render() {
    return (
      <main>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header as="h1">What brings you here today?</Card.Header>
            <Card.Body>

              <Form>
                <Form.Group controlId="decisionContent" onSubmit={this.handleSubmit}>
                  <Form.Label>
                    What decision are you trying to make?
                  </Form.Label>
                  {this.state.editable ? (
                    <Form.Control as="textarea" rows="2" placeholder="Decision summary" />
                  ) : (
                    <Form.Control
                      plaintext
                      readOnly
                      defaultValue="email@example.com"
                    />
                  )}

                  <Form.Text className="text-muted">
                    Nebulous is fine
                  </Form.Text>
                </Form.Group>
              </Form>

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
        </Accordion>

        <Section
          title={"Card title"}
          body={
            "Dolore proident incididunt esse ad aliquip excepteur eiusmod ex. Excepteur laborum ut aliqua laboris consectetur. Mollit est aliqua labore ipsum occaecat tempor. In laborum reprehenderit sunt amet veniam nulla velit. Minim sint eiusmod consequat id esse exercitation officia tempor Lorem veniam eu ex ea culpa. Ea reprehenderit ad esse amet consequat dolore velit amet fugiat tempor consequat ut ipsum amet. Qui consectetur culpa duis aliquip est ea enim aute nisi tempor adipisicing."
          }
          subtitle={"some more text"}
        />
        <Collapsible></Collapsible>
      </main>
    );
  }
}

export default Decision;
