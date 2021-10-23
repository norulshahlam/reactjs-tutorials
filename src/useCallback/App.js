/*
The React docs say that 
useCallback: Returns a memorized callback.
And that useMemo: Returns a memoized value.

In other words, useCallback gives you referential equality between renders for functions. And useMemo gives you referential equality between renders for values.
useCallback and useMemo both expect a function and an array of dependencies. The difference is that useCallback returns its function when the dependencies change while useMemo calls its function and returns the result.

https://medium.com/@jan.hesters/usecallback-vs-usememo-c23ad1dc60#:~:text=In%20other%20words%2C%20useCallback%20gives,equality%20between%20renders%20for%20values.&text=The%20difference%20is%20that%20useCallback,function%20and%20returns%20the%20result.
*/

import React, { useState, useCallback } from "react";
import { List } from "./List";

const App = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <br />
      <button
        onClick={() => {
          setDark((prevDark) => !prevDark);
        }}
      >
        Toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  );
};

export default App;
