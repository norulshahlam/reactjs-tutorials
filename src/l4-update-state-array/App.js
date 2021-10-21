import "../App.css";
import React, { useState } from "react";
/*  ****** LESSON  4*******

1. forms - add value into data[] and reflect the changes in browser using the same technique in last lesson
2. clear all options with the reset button
3. render an array using map() and understand unique key props
4. conditional rendering

*/
const App = () => {
  const [data, setData] = useState([]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    // 1.
    if (option) {
      setData((prevArray) => [...prevArray, option]);
    }
    e.target.elements.option.value = "";
  };

  // 2.
  const removeLists = () => {
    setData([]);
  };

  return (
    <div className="App">
     
      {/* 4. */}
      {data.length > 0 ? (
        <div>
          You have {data.length} options &nbsp;
          <br /><button onClick={removeLists}>remove all</button>
        </div>
      ) : (
        <div>Please insert option!</div>
      )}
      <ol>
        {/* 3. */}
        {data.map((i, k) => {
          return <div key={k}>Options: {i}</div>;
        })}
      </ol>

      {/* 1. */}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );
};

export default App;
