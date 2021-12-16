import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/chars">
          <span>Characters</span>
        </Link>
        <Link to="/about">About</Link>
        <Link to="/credits">Credits</Link>
      </nav>
    </div>
  );
}
