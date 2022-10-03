import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (

  <nav>
    <h1>This is the NavBar</h1>

    <>
      <NavLink to="/HomePage">Home home</NavLink>
      <NavLink to="/DetailsPage">Details Page</NavLink>
    </>

  </nav>

);

export default Nav;
