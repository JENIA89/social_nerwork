import React from 'react';
import { NavLink } from 'react-router-dom';
import cls from './DialogItem.module.css';

const DialogItem = ({ name, id }) => (
  <div className={cls.dialog}>
    <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
  </div>
);

export default DialogItem;
