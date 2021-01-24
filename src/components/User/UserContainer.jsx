import React from 'react';
import { connect } from 'react-redux';
import {
  followActionCreator,
  getUsersActionCreator,
  unFollowActionCreator,
} from '../../redux/reducers/userReducer';
import User from './User';

const mapStateToProps = (state) => {
  return {
    users: state.userPage.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followActionCreator(userId)),
    unfollow: (userId) => dispatch(unFollowActionCreator(userId)),
    getUsers: (users) => dispatch(getUsersActionCreator(users)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
