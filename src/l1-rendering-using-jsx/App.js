import "../App.css";
import React from "react";
/* ****** LESSON 1 *******

1. Rendering into browser using jsx

*/
const App = () => {

  var user = {
    name: "shah",
    age: 26,
    location: "jurong",
  };
  

  return (
    <div className="App">
      <h1>{user.name}</h1>
    <p>age: {user.age}</p>
    <p>location: {user.location}</p>
    </div>
  );
};

export default App;
