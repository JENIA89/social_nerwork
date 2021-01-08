import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import cls from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => (
  <div className={cls.content}>
    <ProfileInfo />
    <MyPosts />
  </div>
);

export default Profile;
