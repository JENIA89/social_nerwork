import { connect } from 'react-redux';
import {
  addNewPostActionCreator,
  updatePostActionCreator,
} from '../../../redux/reducers/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: () => dispatch(addNewPostActionCreator()),
    onPostChange: (text) => dispatch(updatePostActionCreator(text)),
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
