import "../App.css";
import React, {useState} from "react";
/*  ****** LESSON 3 *******

events handler using state
1. method 1 - function referencing for even handler
2. method 2 - inline function

both handler can be seen thru console

*/
const App = () => {
 
const [count,setCount] = useState(0);

const minusOne = () => {
  setCount(prevCount=> prevCount-1);
};

const reset = () => {
  setCount(0); 
};
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      {/* 1 */}
      <button onClick={()=> setCount(count+1)}>+1</button><br />
      {/* 2 */}
      <button onClick={minusOne}>-1</button><br />
      <button  onClick={reset}>reset</button><br />
    </div>
  );
};

export default App;
