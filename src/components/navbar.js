import React from "react";
import logo from "../images/airbnb-logo.png";
import "../style.css";

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function Navbar() {
  return (
    <>
      <navbar>
        <img src={logo} alt="logo" />
      </navbar>
    </>
  );
}
