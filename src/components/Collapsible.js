import React from "react";
import { Card, Accordion } from "react-bootstrap";
import CollapseToggle from './CollapseToggle';

const Collapsible = (props) => {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <CollapseToggle eventKey="0"></CollapseToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
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
  );
};

export default Collapsible;
