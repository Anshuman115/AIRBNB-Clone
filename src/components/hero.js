import React from "react";
import photo from "../images/photo-grid.png";
import "../style.css";

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function Hero() {
  return (
    <>
      <div className="hero">
        <img className="grid" src={photo} alt="" />
        <h2>Online Experiences</h2>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </>
  );
}
