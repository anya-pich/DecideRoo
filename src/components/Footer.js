import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Navbar
        bg="primary"
        variant="dark"
        className="justify-content-center"
        fixed="bottom"
      >
        <Nav>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Navbar>
    </footer>
  );
};

export default Footer;
