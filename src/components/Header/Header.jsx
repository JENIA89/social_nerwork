import React from 'react';
import { NavLink } from 'react-router-dom';
import cls from './Header.module.css';

const Header = (props) => (
  <header className={cls.header}>
    <img
      src='https://image.freepik.com/vecteurs-libre/resume-logo-feuilles-colorees_1025-695.jpg'
      alt='logo'
    />
    <div className={cls.loginBlock}>
      {props.isAuth ? (
        `${props.login} В сети`
      ) : (
        <NavLink to={'/login'}>Login</NavLink>
      )}
    </div>
  </header>
);

export default Header;
