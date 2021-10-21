import "../App.css";
import React from "react";
/*  ****** LESSON 2 *******

1. use ternatory as condition in jsx
2. use logical 'AND' operator -  if true render, else dont do anything
3. using function as condition and output with html element
 
*/
const App = () => {
  var user = {
    name: "shah",
    age: 46,
    location: "jurong",
  };

  // 1.
  function getLocation(location) {
    if (location) {
      return <p>Location: {location}</p>;
    }
  }

  return (
    <div className="App">
      {/* 1. */}
      <h1>{user.name ? user.name : "Anonymous"}</h1>
      {/* 2. */}
      {user.age && user.age >= 18 && <p>age: {user.age}</p>}
      {/* 3. */}
      {getLocation(user.location)}
    </div>
  );
};

export default App;
