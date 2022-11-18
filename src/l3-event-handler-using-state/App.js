import "../App.css";
import React, {useState, useEffect} from "react";
/*  ****** LESSON 3 *******

events handler using state
1. method 1 - function referencing for even handler
2. method 2 - inline function
3. understanding useEffect cleanup

What is the useEffect cleanup function?
Just like the name implies, the useEffect cleanup is a function in the useEffect Hook that allows us to tidy up our code before our component unmounts. When our code runs and reruns for every render, useEffect also cleans up after itself using the cleanup function.

both handler can be seen thru console

*/
const App = () => {
 
const [count,setCount] = useState(0);

const minusOne = () => {
  setCount(prevCount=> prevCount-1);
};

useEffect(() => {
  console.log(count);

  return () => {
    console.log("teardown");
  }
}, [count])
 

const reset = () => {
  setCount(0); 
};
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      {/* 1 */}
      <button onClick={()=> setCount((prev)=>prev+1)}>+1</button><br />
      {/* 2 */}
      <button onClick={minusOne}>-1</button><br />
      <button  onClick={reset}>reset</button><br />
    </div>
  );
};

export default App;
