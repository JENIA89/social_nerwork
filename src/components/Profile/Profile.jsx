import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import cls from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ dispatch, profilePage }) => (
  <div className={cls.content}>
    <ProfileInfo />
    <MyPostsContainer
      posts={profilePage.postData}
      newPostText={profilePage.newPostText}
      dispatch={dispatch}
    />
  </div>
);

export default Profile;
