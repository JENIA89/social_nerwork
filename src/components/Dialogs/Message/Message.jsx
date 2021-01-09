import React from 'react';
import cls from './Message.module.css';

const Message = ({ message }) => <div className={cls.message}>{message}</div>;

export default Message;
