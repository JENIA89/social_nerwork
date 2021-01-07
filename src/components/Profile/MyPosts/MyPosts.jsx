import React from 'react';
import cls from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => (
  <div>
    My posts
    <div>New post</div>
    <div>
      <Post message='Hi, how are you?' />
      <Post message='first post' />
    </div>
  </div>
);

export default MyPosts;
