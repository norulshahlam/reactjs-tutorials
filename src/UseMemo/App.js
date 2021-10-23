/*
useMemo

in this example, we have a slowdown method that multiplies a number by 2.
so everytime a number changes, the multiplier value updates a sec later.
but this also affects the theme changer bcos everytime any state changed, the whole code runs again, that is including the slowdown method
this is inefficient cos the number wont change when a theme changes yet theme is also affected.

by using useMemo, it checks for a state defined (number input for this case), n if the number doesnt change, it will skip this method

useMemo will only recompute the memorized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.
*/

import React, { useState, useMemo } from "react";
import "./App.css";

const App = () => {
  const [num, setNum] = useState(0);
  const [dark, setDark] = useState(false);

  const styles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  const doubleNum = useMemo(() => {
    return slowFunc(num);
  }, [num]);

  return (
    <div className="App" style={styles}>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value))}
      />
      <div className="styles">{doubleNum}</div>

      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change theme
      </button>
    </div>
  );
};

function slowFunc(num) {
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

export default App;
