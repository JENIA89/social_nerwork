import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import cls from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => (
  <div className={cls.content}>
    <ProfileInfo profile={props.profile} />
    <MyPostsContainer />
  </div>
);

export default Profile;
