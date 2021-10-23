import React from "react";
import { useTheme } from "./ThemeContext";
const Grandchild = () => {
  const { count, setCount } = useTheme();
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add One more!</button>
      <div>{count}</div>
    </div>
  );
};

export default Grandchild;
