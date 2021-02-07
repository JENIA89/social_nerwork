import React from 'react';
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
import { usersAPI } from '../../api/api';

class UserContainer extends React.Component {
  componentDidMount() {
    this.props.setIsLoading(true);
    usersAPI
      .getAllUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.setIsLoading(false);
        this.props.getUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onChangePage = (pageNum) => {
    this.props.setCurrentPage(pageNum);
    this.props.setIsLoading(true);
    usersAPI.getAllUsers(pageNum, this.props.pageSize).then((data) => {
      this.props.setIsLoading(false);
      this.props.getUsers(data.items);
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
  setCurrentPage,
  setTotalUsersCount,
  setIsLoading,
})(UserContainer);
