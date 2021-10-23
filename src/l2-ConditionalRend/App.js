/*
Conditional rendering is a term to describe the ability to render different user interface (UI) markup if a condition is true or false or conditions specified by user. we will have 2 type of conditon
1. if, else if
2. if, else
3. ternatory operator

https://www.digitalocean.com/community/tutorials/7-ways-to-implement-conditional-rendering-in-react-applications

https://reactjs.org/docs/hooks-state.html
*/

import React, { useState, useEffect } from "react";
import "./App.css";
import Blue from "./Blue";
import False from "./False";
import Red from "./Red";
import True from "./True";
import { Button } from "react-bootstrap";
let booleanComponent = "";
let colorComponent = "";
const App = () => {
  const [color, newColor] = useState("");
  const [bool, setBool] = useState("");

  const onClick = (e) => {
    newColor((prevState) => (prevState = e.target.innerText));
    if (color === "Red") {
      colorComponent = <Red />;
    } else if (color === "Blue") {
      colorComponent = <Blue />;
    } else {
      colorComponent = "";
    }
    console.log(color);
  };

  const setBoolFalse = () => {
    setBool((prevState) => (prevState = false));
    booleanComponent = <False />;
  };
  const setBoolTrue = () => {
    setBool((prevState) => (prevState = true));
    booleanComponent = <True />;
  };

  useEffect(() => {
    console.log(color, bool);
  }, [bool, color]);

  return (
    <div>
      <div className="ifElse">
        <h1>Color Selector</h1>
        <h3>Select your comp</h3>
        <Button onClick={onClick}>Blue</Button>
        <Button onClick={onClick}>Red</Button>
        <Button onClick={onClick}>Reset</Button>
        {colorComponent}
      </div>
      {/* this is setting state within the element  */}
      <div className="ifElse">
        <h1>Choose a boolean value</h1>
        <Button onClick={setBoolFalse}>false</Button>
        <Button onClick={setBoolTrue}>true</Button>
        {booleanComponent}
      </div>
    </div>
  );
};

export default App;
