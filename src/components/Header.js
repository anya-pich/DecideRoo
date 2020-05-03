import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = (props) => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" className="justify-content-between">
        <Navbar.Brand href="/">DecideRoo</Navbar.Brand>
        <Nav>
          <Nav.Link href="/six-hats">Six Hats</Nav.Link>
          <Nav.Link href="/jump-to">Jump To</Nav.Link>
          <Nav.Link href="/mathsy">Lengthy Mathsy</Nav.Link>
        </Nav>
        <Navbar.Text>
          Signed in as: <a href="/login">Mark Otto</a>
        </Navbar.Text>
      </Navbar>
    </header>
  );
};

export default Header;
