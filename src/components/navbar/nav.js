import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';
import PropTypes from 'prop-types';

const Nav = (props) => {
  const { name, arrow } = props;

  return (
    <nav className="Nav-bar">
      {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}
      <h1>{name}</h1>

      <>
        <NavLink to="/HomePage">
          {arrow}
        </NavLink>
      </>

    </nav>
  );
};

Nav.propTypes = {
  name: PropTypes.string,
  arrow: PropTypes.string,
}.isRequired;

export default Nav;
