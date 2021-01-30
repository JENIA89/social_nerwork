import React from 'react';
import slc from './User.module.css';
import axios from 'axios';
import userPhoto from '../../assets/img/user.png';

class User extends React.Component {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => this.props.getUsers(response.data.items));
  }

  render() {
    return (
      <div>
        {this.props.users.map((user) => (
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
                    this.props.unfollow(user.id);
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.follow(user.id);
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
  }
}

export default User;
