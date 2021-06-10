import React from "react";
import "../src/css/index.css";
import "../src/css/Common.css";
import Navbar from "./components/Navbar";
// import {
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { Redirect, Route, Switch } from "react-router";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
