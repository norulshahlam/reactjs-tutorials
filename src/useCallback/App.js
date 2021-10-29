/*
The React docs say that 
useCallback: Returns a memorized callback.
And that useMemo: Returns a memoized value.

In other words, useCallback gives you referential equality between renders for functions. And useMemo gives you referential equality between renders for values.
useCallback and useMemo both expect a function and an array of dependencies. The difference is that useCallback returns its function when the dependencies change while useMemo calls its function and returns the result.


https://medium.com/@jan.hesters/usecallback-vs-usememo-c23ad1dc60#:~:text=In%20other%20words%2C%20useCallback%20gives,equality%20between%20renders%20for%20values.&text=The%20difference%20is%20that%20useCallback,function%20and%20returns%20the%20result.


Example

We have 2 states - toggle theme and counter. everytime a state changes, the whole thing gets re-rendered.
getItems is a function that returns a number to <List /> and it will only gets called if a number change. DONT FOCUS ON THIS FUNCTION! IT IS JUST A FUNCTION. so everytime a state changes, getItems() is called becuase the whole page re-renders.
So to avoid unnecessary re-rendering, we wrap getItems() with useCallback so getItems() will only called when number state changes. this is same as useMemo only diff is it returns a function while useMemo calls its function when the dependencies change.




*/

import React, { useState, useCallback } from "react";
import { List } from "./List";

const App = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);
  const toggleHandler = () => setDark((prevDark) => !prevDark);
  const changeNumber = (e) => setNumber(parseInt(e.target.value))
  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
    margin:"50% 5%",
    padding:"30px",
    borderRadius:"20px"
  };

  const getItems = useCallback(() => {
    return [number];
  }, [number]);
 
  return (
    <div style={theme}>
      <h1>useCallback</h1>
       <button onClick={toggleHandler}>Toggle theme</button><br />     
      <input
        type="number"
        value={number}
        onChange={(e)=>{changeNumber(e)}}
      />
      
      <List getItems={getItems} />
    </div>
  );
};

export default App;
