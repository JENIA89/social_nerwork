import React from 'react';
import slc from './User.module.css';

const User = (props) => {
  return (
    <div>
      {props.users.map((user) => (
        <div key={user.id}>
          <div>
            <img src={user.userPhoto} className={slc.userImg} alt='avatar' />
          </div>
          <div>
            {user.followed ? (
              <button
                onClick={() => {
                  props.unfollow(user.id);
                }}
              >
                unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(user.id);
                }}
              >
                follow
              </button>
            )}
          </div>
          <span>{user.fullName}</span>
          <span>
            <div>{user.location.country}</div>
            <div>{user.location.city}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default User;
