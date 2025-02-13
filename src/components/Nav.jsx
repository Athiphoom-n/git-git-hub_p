import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="navbar">
      <div className="links">
        <Link to={"/"}> Shop </Link>
        <Link to={"/cart"}> Cart </Link>
      </div>
      <div className="Se">
        <Link to={"/"}> pro </Link>
        <Link to={"/login"}> Login </Link>
      </div>
    </div>
  );
}

export default Nav;
