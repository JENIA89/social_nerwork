import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import cls from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => (
  <div className={cls.content}>
    <ProfileInfo />
    <MyPostsContainer />
  </div>
);

export default Profile;
