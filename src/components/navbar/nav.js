import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (

  <nav>
    <h1>This is the NavBar</h1>

    <>
      <NavLink to="/HomePage">Home</NavLink>
      <NavLink to="/DetailsPage">Details</NavLink>
    </>

  </nav>

);

export default Nav;
