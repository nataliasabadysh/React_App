import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'block',
    padding: '4px 0',
    fontWeight: 500,
    textTransform: 'uppercase',
    fontSize: 18,
    textDecoration: 'none',
    color: '#212121',
  },
  active: {
    color: '#FF4081',
  },
};

const Nav = () => (
  <ul>
    <li>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.active}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/articles" style={styles.link} activeStyle={styles.active}>
        Articles
      </NavLink>
    </li>
    <li>
      <NavLink to="/about" style={styles.link} activeStyle={styles.active}>
        About
      </NavLink>
    </li>
    <li>
      <NavLink to="/form" style={styles.link} activeStyle={styles.active}>
        Login
      </NavLink>
    </li>
    <li>
      <NavLink to="/posts" style={styles.link} activeStyle={styles.active}>
        Posts
      </NavLink>
    </li>
    <li>
      <NavLink to="/list" style={styles.link} activeStyle={styles.active}>
        list
      </NavLink>
    </li>
  </ul>
);

export default Nav;