import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import cls from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ dispatch, profilePage }) => (
  <div className={cls.content}>
    <ProfileInfo />
    <MyPosts
      posts={profilePage.postData}
      newPostText={profilePage.newPostText}
      dispatch={dispatch}
    />
  </div>
);

export default Profile;
