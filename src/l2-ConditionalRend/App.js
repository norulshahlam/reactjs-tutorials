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
import Color from "./Color";
const App = () => {
  const [color, newColor] = useState("");
  const [bool, setBool] = useState("");

  const onClick = (e) => {
    e.preventDefault();

    newColor(
      (prevState) =>
        (prevState = e.target.value ? <Color color={e.target.value} /> : "")
    );
  };

  const setBoolFalse = (e) => {
    setBool((prevState) => (prevState = e.target.value=="true" ? <True /> : <False />));
  };
 
  useEffect(() => {
    console.log(color, bool);
  }, [bool, color]);

  return (
    <div>
      <div className="ifElse">
        <h1>Color Selector</h1>
        <h3>Select your comp</h3>
        <Button onClick={onClick} value="blue">
          Blue
        </Button>
        <Button onClick={onClick} value="red">
          Red
        </Button>
        <Button onClick={onClick} value="green">
          Green
        </Button>
        <Button onClick={onClick} value="">
          Reset
        </Button>

        {color}
      </div>
      <div className="ifElse">
        <h1>Choose a boolean value</h1>
        <Button onClick={setBoolFalse} value="false">false</Button>
        <Button onClick={setBoolFalse} value="true">true</Button>
        {bool}
      </div>
    </div>
  );
};

export default App;
