import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './nav.css';
import PropTypes from 'prop-types';

const Nav = (props) => {
  const { name, arrow } = props;

  return (
    <nav className="Nav-bar">
      <span className="NavBarDate">2022</span>

      <Link className="NavBarTitle" href="https://github.com/ErikStoupignan" target="_blank">{name}</Link>

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
