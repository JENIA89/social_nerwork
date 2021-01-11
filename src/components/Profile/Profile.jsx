import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import cls from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ profilePage, addPost, updatePostText }) => (
  <div className={cls.content}>
    <ProfileInfo />
    <MyPosts
      posts={profilePage.postData}
      newPostText={profilePage.newPostText}
      addPost={addPost}
      updatePostText={updatePostText}
    />
  </div>
);

export default Profile;
