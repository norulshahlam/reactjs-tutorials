import React, { useEffect } from "react";

let renderCount = 0;
const Child = () => {
  useEffect(() => {
    renderCount=renderCount+1;
  });
  return <span>render count: {renderCount}</span>;
};

export default Child;
