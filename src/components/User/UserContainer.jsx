import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  follow,
  getUsers,
  setCurrentPage,
  setIsLoading,
  setTotalUsersCount,
  unFollow,
} from '../../redux/reducers/userReducer';
import User from './User';

class UserContainer extends React.Component {
  componentDidMount() {
    this.props.setIsLoading(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setIsLoading(false);
        this.props.getUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onChangePage = (pageNum) => {
    this.props.setCurrentPage(pageNum);
    this.props.setIsLoading(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setIsLoading(false);
        this.props.getUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.loading ? (
          <div>...</div>
        ) : (
          <User
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            onChangePage={this.onChangePage}
            unFollow={this.props.unFollow}
            follow={this.props.follow}
            pageSize={this.props.pageSize}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.userPage.users,
    pageSize: state.userPage.pageSize,
    totalUsersCount: state.userPage.totalUsersCount,
    currentPage: state.userPage.currentPage,
    loading: state.userPage.loading,
  };
};

export default connect(mapStateToProps, {
  follow,
  unFollow,
  getUsers,
  getUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsLoading,
})(UserContainer);
