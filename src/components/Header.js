import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useAuth } from "./hooks/useAuth";

const Header = (props) => {
  // get auth state & re-render anytime it changes
  const auth = useAuth();

  return (
    <header>
      <Navbar
        bg="primary"
        variant="dark"
        expand="md"
        className="justify-content-between"
      >
        <Navbar.Brand href="/">DecideRoo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/six-hats">Six Hats</Nav.Link>
            <Nav.Link href="/jump-to">Jump To</Nav.Link>
            <Nav.Link href="/mathsy">Lengthy Mathsy</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            {auth.user ? (
              <>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link onClick={auth.logout}>Log Out</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/login">Log In</Nav.Link>
                <Nav.Link href="/register">Sign Up</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
