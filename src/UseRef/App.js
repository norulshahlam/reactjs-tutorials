/*
 useRef() is a hook to keep track of variables without causing re-renders.

 use case: 
 1. track changes without enforcing the re-rendering of the component (mostly used)
 2. to persist current value when a state change. (mostly used)
 3. ref a html element (seldom used)
*/

import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(0);
  const prevName = useRef("");
  const inputRef = useRef();
  console.log("rendered!");

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    prevName.current = name;
  });

  return (
    <div>
      <div className="App">
        <button onClick={() => inputRef.current.focus()}>
          Click me to focus on input
        </button>
        <input
          ref={inputRef}
          placeholder="type me"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <div>My name is: {name}</div>
        <div>It used to be: {prevName.current}</div>
        <div>It rendered {renderCount.current} times</div>
      </div>
    </div>
  );
};

export default App;
