import React, { Component } from 'react';
import {
  NavLink,
  HashRouter
} from "react-router-dom";
import './App.css';

class Nav extends Component {
  render() {
    return (
      <HashRouter>
        <div>
            <div class="Nav-Bar">
                <NavLink to="/Dashboard">Dashboard</NavLink>
                <NavLink to="/Team">Team</NavLink>
            </div>
            <NavLink to="/Login" class="Accountbtn"><span>Login</span></NavLink>
        </div>
      </HashRouter>
    );
  }
}

export default Nav;
