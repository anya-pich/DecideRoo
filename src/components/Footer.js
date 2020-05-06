import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <nav className="navbar fixed-bottom navbar-dark bg-primary">
        <Link className="nav-link mx-auto" to="/about">About</Link>
      </nav>
    </footer>
  );
};

export default Footer;
