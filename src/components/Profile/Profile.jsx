import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import cls from './Profile.module.css';

const Profile = () => (
  <div className={cls.content}>
    <div>
      <img
        src='https://images.unsplash.com/photo-1468879823303-35edd50416dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        alt='logo'
      />
    </div>
    <div>ava + description</div>
    <MyPosts />
  </div>
);

export default Profile;
