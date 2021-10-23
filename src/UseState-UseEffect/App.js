/*
We will be learninig on Hook - Staate and useEffect

useEffect serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount. it's a lifecycle method which runs every time a component gets new props, or a state change happens. That's the trick. If we include a state in useEffect we would see an infinite loop bcos:

a setting of a state inside useEffect means useEffect will be triggered (cos of state/prop change), which means a state inside will get changed, which in turn triggers the useEffect (cos of state/prop change), and ad infinitum.

so there's 2 way to prevent this: to use the state as the 2nd arg so the useEffect() only trigggers when the state change. or
to use empty array so useEffect() will run only once

State

The names above can be anything you want, it doesn't matter for React. It is adviseable to use descriptive and meaningful variable names depending on the state's purpose.

The argument passed to useState is the actual initial state, the data that will be subject to changes. useState returns for you two bindings:

the actual value for the state (toggle)
the state updater function for said state (setToggle)
argument passed to useState, actual initial state(true)
eg:
const [toggle, setToggle] = useState(true);

*/

//1. import
import React, { useState, useEffect } from "react";
import MyState from "./MyState";

const App = () => {
  //2. set init value (initState) to true, and the name of the set state = 'setToggle'
  const [toggle, setToggle] = useState(true);
  const [initCount, newCount] = useState(0);
  const [num, setNum] = useState(0);

  //this part trigggers when there is a change in props/state overall
  console.log("in main, selected number: ", num);

  useEffect(() => {
    //this part trigggers when there is a change in props/state DEFINED in 2nd arg
    console.log("in useEffect");
  }, [initCount, num]);

  const onClick = () => {
    //3. setting the new state value
    setToggle(!toggle);
    counter();
    console.log("clicked!");
  };

  const counter = () => {
    newCount(initCount + 1);
  };

  return (
    <div>
      <h1>You have clicked {initCount} times</h1>
      <p></p>
      {/* this button wil toggle false/true value on click */}
      <button onClick={onClick}>
        Click Me to toggle below child component!
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          setNum(1);
          console.log("clicked!");
        }}
      >
        Select 1
      </button>
      <button
        onClick={() => {
          setNum(2);
          console.log("clicked!");
        }}
      >
        Select 2
      </button>
      {/* display below comp if state is true */}
      {toggle && <MyState />}

      <h1>Selected: {num}</h1>
    </div>
  );
};

export default App;
