import "../App.css";
import React, { useState } from "react";
/*  ****** LESSON  5*******

Continuation from last lesson

1. create button to select added list randomly - using random()
2. disable this button (cond rendering) if theres no list added yet
*/
const App = () => {
  const [data, setData] = useState([]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
      setData((prevArray) => [...prevArray, option]);
    }
    e.target.elements.option.value = "";
  };

  // 1.
  const makeDecision = () => {
    const random = Math.floor(Math.random() * data.length);
    const option = data[random];
    alert(`You should do: ${option}`);
  };
  const removeLists = () => {
    setData([]);
  };

  return (
    <div className="App">
      {data.length > 0 ? (
        <div>
          You have {data.length} options &nbsp;
          <br />
          <button onClick={removeLists}>remove all</button>
        </div>
      ) : (
        <div>Please insert option!</div>
      )}
      <ol>
        {data.map((i, k) => {
          return <div key={k}>Options: {i}</div>;
        })}
      </ol>
      {/* 2. */}
      <button disabled={data.length === 0} onClick={makeDecision}>
        what should i do?
      </button>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );
};

export default App;
