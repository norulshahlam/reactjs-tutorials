/*
useMemo

in this example, we have 2 identical Child component and when a state changes, this component gets re-rendered. We can find out by using useEffect on the child component and set a counter to it.

Now by using useMemo and using empty array as its dependency, it wont re-redner this component, unless the dependency changes. The configuration is similar to useEffect

by using useMemo, it checks for a state defined (number input for this case), n if the number doesnt change, it will skip this method

useMemo will only recompute the memorized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.

Should I use useMemo everywhere?
Why not use useMemo everywhere then? In short, it's not a free performance optimisation. There's an additional cost (memory usage, for one) incurred when setting up useMemo , that can very quickly outweigh the performance benefit of remembering every single function's possible value.
*/
import React, { useState, useMemo } from "react";
import Child from "./Child";
import { Button } from "react-bootstrap";
import "../App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const click = () => setCount(count + 1);
  //
  const memoChild = useMemo(() => {
    return <Child />;
    // add a state in this dependency and it will re-render as normal
  }, []);

  const normalChild = <Child />;
  //
  return (
    <div className="App">
      <div>
        <Button onClick={click}>Increase count</Button> <>count : {count}</>
      </div>
      <header>
        <h3>Use Memo: <>{memoChild}</></h3>
        <h3>Normal Render: <>{normalChild}</></h3>
      </header>
    </div>
  );
};

export default App;
