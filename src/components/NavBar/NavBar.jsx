import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <h1>This is the nav_bar</h1>
    <div>
      <NavLink to="Home">Home Page</NavLink>
      <NavLink to="Details_page">Home Page</NavLink>
    </div>
  </nav>
);

export default NavBar;
