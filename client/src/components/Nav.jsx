import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

export default function Nav() {
  return (
    <div>
      <nav className="nav-bar">
        <Link style={{ textDecoration: "none" }} to="/">
          <span className="nav-text">Home</span>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/chars">
          <span className="nav-text">Characters</span>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/about">
          <span className="nav-text">About</span>
        </Link>
      </nav>
    </div>
  );
}
