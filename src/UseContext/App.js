/*

“useContext” hook is used to create common data that can be accessed throughout the component hierarchy without passing the props down manually to each level

How to use Context. YOu can pass props or state. I will be passing state

***in UserProvider.js
1. create createContext() object
2. create state hooks
3. return the element of createContext() object with the state hook as the value

***in root comp***
1. Wrap the whole rendering with createContext() object. now any nested comp can access this state

now any nested components can get this value and update it and all components can get the changes

***in any comp using this object**
1. create object of useContext with userContext() obj as arg, and the state as its object. Use destructuring.
2. Since now this component has acccess to this state, it can change this state too.

*/

import React from "react";
import Child from "./Child";
import { UserProvider } from "./UserProvider";
const App = () => {
  return (
    <UserProvider>
      <div className="border rounded-md text-center p-100 m-100 bg-red-300">
        <h1>This the from root component</h1>
        <Child />
      </div>
    </UserProvider>
  );
};

export default App;
