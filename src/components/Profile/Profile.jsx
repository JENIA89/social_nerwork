import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import cls from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ state }) => (
  <div className={cls.content}>
    <ProfileInfo />
    <MyPosts posts={state.postData} />
  </div>
);

export default Profile;
