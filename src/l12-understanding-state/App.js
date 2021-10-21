import React, { useState } from "react";
import "../App.css";

/*
How it works?

Because in IncrementWithoutPrevState method since there are multiple setState calls, so React batched all those calls and updates the state only in the last call of setState in this method, so at the time of last call to setState in this method this.state.count is not yet updated and its value is still the same that was before entering into IncrementWithoutPrevState method so the resultant state will contain count incremented by 1.

Now on the other hand side if we analyze the IncrementWithPrevState method: Again there are multiple setState calls and React batched them all that means the actual state will be updated in the last call of setState but the prevState will always contain the modified state in the recent setState call. As previousState.count value has already been incremented 3 times till the last call of setState so the resultant state will contain the count value incremented by 4.

https://stackoverflow.com/questions/55495198/reacts-setstate-method-with-prevstate-argument#answer-55497074

also to learn more on updater functions in react state:

https://medium.com/@jan.hesters/updater-functions-in-reacts-setstate-63c7c162b16a

*/

const App = () => {
  const [data, setData] = useState(0);

  const incrementWithPrevState = () => {
    setData((prevData) => prevData + 1);
    setData((prevData) => prevData + 1);
    setData((prevData) => prevData + 1);
    setData((prevData) => prevData + 1);
  };

  const incrementWithoutPrevState = () => {
    setData(data + 1);
    setData(data + 1);
    setData(data + 1);
    setData(data + 1);
  };

  return (
    <div className="App">
      <br/>
      <br/>
      <button onClick={incrementWithoutPrevState}>
        Increment 4 times without PrevState
      </button>
      <br/>
      <button onClick={incrementWithPrevState}>Increment 4 times with PrevState</button>
      <h1>Count: {data}</h1>
    </div>
  );
};

export default App;
