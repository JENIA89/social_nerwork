import React from 'react';
import cls from './ProfileInfo.module.css';

const ProfileInfo = () => (
  <div className={cls.content}>
    <div>
      <img
        src='https://images.unsplash.com/photo-1468879823303-35edd50416dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        alt='logo'
      />
    </div>
    <div className={cls.descriptionBlock}>ava + description</div>
  </div>
);

export default ProfileInfo;
