import { connect } from 'react-redux';
import { follow, getUsers, unFollow } from '../../redux/reducers/userReducer';
import User from './User';

const mapStateToProps = (state) => {
  return {
    users: state.userPage.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(follow(userId)),
    unfollow: (userId) => dispatch(unFollow(userId)),
    getUsers: (users) => dispatch(getUsers(users)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
