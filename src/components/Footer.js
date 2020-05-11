import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <nav className="navbar fixed-bottom navbar-dark bg-dark">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
