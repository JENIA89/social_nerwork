import React from 'react';
import { NavLink } from 'react-router-dom';
import cls from './NavBar.module.css';

const NavBar = () => (
  <nav className={cls.nav}>
    <div className={cls.item}>
      <NavLink to='/profile' activeClassName={cls.activeLink}>
        Profile
      </NavLink>
    </div>
    <div className={cls.item}>
      <NavLink to='/dialogs' activeClassName={cls.activeLink}>
        Messages
      </NavLink>
    </div>
    <div className={cls.item}>
      <NavLink to='/news' activeClassName={cls.activeLink}>
        News
      </NavLink>
    </div>
    <div className={cls.item}>
      <NavLink to='/music' activeClassName={cls.activeLink}>
        Music
      </NavLink>
    </div>
    <div className={cls.item}>
      <NavLink to='/settings' activeClassName={cls.activeLink}>
        Settings
      </NavLink>
    </div>
  </nav>
);

export default NavBar;
