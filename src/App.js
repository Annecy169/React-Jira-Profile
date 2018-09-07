import React, { Component } from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Team from "./Team";
import Login from "./Login";
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="content">
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/Dashboard" component={Dashboard}/>
          <Route path="/Team" component={Team}/>
          <Route path="/Login" component={Login}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
