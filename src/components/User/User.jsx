import React from 'react';
import slc from './User.module.css';
import userPhoto from '../../assets/img/user.png';

const User = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => (
          <span
            key={p.id}
            className={props.currentPage === p && slc.selectedPage}
            onClick={() => props.onChangePage(p)}
          >
            {p}
          </span>
        ))}
      </div>
      {props.users.map((user) => (
        <div key={user.id}>
          <div>
            <img
              src={user.photos.small || userPhoto}
              className={slc.userImg}
              alt='avatar'
            />
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
          <span>{user.name}</span>
          <span>
            {/* <div>{user.location.country}</div> */}
            {/* <div>{user.location.city}</div> */}
          </span>
        </div>
      ))}
    </div>
  );
};

export default User;
