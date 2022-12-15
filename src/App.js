import React from "react";
import logo from "./images/airbnb-logo.png";
import "./style.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}
