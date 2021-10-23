/*
REACT ROUTER


React router prob and solution!

*/

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import PageNotFound from "./Components/PageNotFound";
import Portfolios from "./Components/Portfolios";
import Contact from "./Components/Contact";
import "../App.css";
import "./index.css";



const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/portfolios" component={Portfolios} />
        <Route path="/portfolio/:id" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
