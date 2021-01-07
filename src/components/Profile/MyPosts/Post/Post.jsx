import React from 'react';
import cls from './Post.module.css';

const Post = ({ message }) => (
  <div>
    <div className={cls.item}>
      <img
        src='https://avatarko.ru/img/kartinka/1/multfilm_gomer.png'
        alt='avatar'
      />
      {message}
    </div>
    <div>
      <span>like</span>
    </div>
  </div>
);

export default Post;
