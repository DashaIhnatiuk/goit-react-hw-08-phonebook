import React from 'react';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';
import { connect } from 'react-redux';
import s from './Navigation.module.css';

const Navigation = ({ isAuthenticated }) => (
  <nav className={s.navWrapper}>
    <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
      Home
    </NavLink>
    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Contacts
      </NavLink>
    )}
  </nav>
);
const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(Navigation);
