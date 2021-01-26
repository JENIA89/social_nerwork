import { connect } from 'react-redux';
import { addNewPost, updatePost } from '../../../redux/reducers/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: () => dispatch(addNewPost()),
    onPostChange: (text) => dispatch(updatePost(text)),
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
