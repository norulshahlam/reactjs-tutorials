/*
we will learn on use reducer and
functional updates

https://stackoverflow.com/questions/57828368/why-react-usestate-with-functional-update-form-is-needed
https://reactjs.org/docs/hooks-reference.html#functional-updates

*/

import React, { useReducer, useState } from "react";
import Todo from "./Todo";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};
function reducer(todos, action) {
  if (action.type === ACTIONS.ADD_TODO) {
    return [...todos, newTodo(action.payload.name)];
  }
  if (action.type === ACTIONS.TOGGLE_TODO) {
    return todos.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
  }
  if (action.type === ACTIONS.DELETE_TODO) {
    return todos.filter((todo) => todo.id !== action.payload.id);
  } else {
    return todos;
  }
}

function newTodo(name) {
  return {
    id: Date.now(),
    name: name,
    complete: false,
  };
}

const App = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  return (
    <div>
      Enter your todo list:
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default App;
