import "../App.css";
import React, { useState } from "react";
/*  ****** LESSON  6*******

a simple exercise - sepeareted from last lesson

1. toggle an element to hide & show on click event

2. toggle button value - button 'hide' when element is shown,
button 'show' when element is hidden

*/
const App = () => {
  let [visibility,toggleVisibility] =useState(false);
  const toggle = () => {
   toggleVisibility(visibility=> !visibility);
  };
  return (
    <div className="App">
       <h1>Visibility toggle</h1>
      <button onClick={toggle}>{visibility ? "hide" : "show"}</button>
      {visibility && <h1>HELLO</h1>}
    </div>
  );
};

export default App;
