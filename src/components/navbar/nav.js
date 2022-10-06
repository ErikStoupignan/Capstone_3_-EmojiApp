import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';
import PropTypes from 'prop-types';

const Nav = (props) => {
  const {
    name,
    arrow = '2022',
    micro,
    nut,
  } = props;

  return (
    <nav className="Nav-bar">
      <NavLink className="NavBarDate-Arrow" to="/HomePage">{arrow}</NavLink>

      <a className="NavBarTitle" href="https://github.com/ErikStoupignan" target="_blank" rel="noreferrer">{name}</a>

      <div className="Navbar-IconsContainer">
        <span className="Navbar-icon"><a href="https://www.linkedin.com/in/erik-sanchez-beltran/" target="_blank" rel="noreferrer">{micro}</a></span>
        <span className="Navbar-icon"><a href="https://github.com/ErikStoupignan/Capstone_3_-EmojiApp" target="_blank" rel="noreferrer">{nut}</a></span>
      </div>

    </nav>
  );
};

Nav.propTypes = {
  name: PropTypes.string,
  arrow: PropTypes.string,
}.isRequired;

export default Nav;
