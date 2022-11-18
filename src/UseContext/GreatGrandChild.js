import React from 'react'
import { useContext } from "react";
import { UserContext } from "./UserProvider";

const GreatGrandChild = () => {
  const { count, setCount } = useContext(UserContext);
  return (
    <div className="border rounded-md text-center p-10 m-120 bg-red-300">
    <h1>From GreatGrandChild component</h1>
    <span className="m-4">{count}</span>
    <button onClick={() => setCount((prevCount) => prevCount + 1)}>
      Add one more!
    </button>
  </div>
  
  )
} 

export default GreatGrandChild