import React from 'react';
import cls from './Post.module.css';

const Post = ({ message, likesCount }) => (
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
      {likesCount}
    </div>
  </div>
);

export default Post;
