import React from "react";

import { Link } from "react-router-dom";
const Portfolios = () => {
  return (
    <div>
      This is all my portfolios
      <Link to="/portfolio/1">item 1</Link>
      <Link to="/portfolio/2">item 2</Link>
      <Link to="/portfolio/3">item 3</Link>
    </div>
  );
};

export default Portfolios;
