import React from "react";
import Form from "./Form";
import List from "../List/List";
import Home from "../Home/Home";
import { Route, Switch, NavLink } from "react-router-dom";
import "./Link.css";

const Link = () => {
  return (
    <div className="App">
      <nav className="App-nav">
        <NavLink exact activeClassName="active-link" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="active-link" to="/register">
          Register
        </NavLink>
        <NavLink exact activeClassName="active-link" to="/employees">
          All-Employees
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Form} />
        <Route exact path="/employees" component={List} />
      </Switch>
    </div>
  );
};

export default Link;
