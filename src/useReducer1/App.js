/*
we will learn on use reducer

An alternative to `useState`. `useReducer` is usually preferable to `useState` when you have complex state logic that involves multiple sub-values. 

functional updates

https://stackoverflow.com/questions/57828368/why-react-usestate-with-functional-update-form-is-needed
https://reactjs.org/docs/hooks-reference.html#functional-updates

*/

import React, { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};
function reducer(state, action) {
  if (action.type === ACTIONS.INCREMENT) {
    return { count: state.count + 1 };
  }
  if (action.type === ACTIONS.DECREMENT) {
    return { count: state.count - 1 };
  } else {
    return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };
  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  return (
    <div>
      <h1>Hello world</h1>

      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default App;
