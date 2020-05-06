import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = (props) => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="md" className="justify-content-between">
        <Navbar.Brand href="/">DecideRoo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/six-hats">Six Hats</Nav.Link>
            <Nav.Link href="/jump-to">Jump To</Nav.Link>
            <Nav.Link href="/mathsy">Lengthy Mathsy</Nav.Link>
          </Nav>
          <Navbar.Text className="ml-auto">
            Signed in as: <a href="/login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
