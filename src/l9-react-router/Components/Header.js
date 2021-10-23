import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Portfoliio</h1>

      <NavLink to="/" activeClassName="is-active" exact={true}>
        Home Page
      </NavLink>
      <NavLink to="/portfolios" activeClassName="is-active" exact={true}>
        My Portfolio
      </NavLink>

      <NavLink to="/contact" activeClassName="is-active">
        Contact
      </NavLink>
    </header>
  );
};

export default Header;
