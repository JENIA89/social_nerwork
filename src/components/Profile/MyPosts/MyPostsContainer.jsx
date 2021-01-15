import React from 'react';
import {
  addNewPostActionCreator,
  updatePostActionCreator,
} from '../../../redux/reducers/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = ({ dispatch, posts, newPostText }) => {
  const addNewPost = () => {
    dispatch(addNewPostActionCreator());
  };

  const onPostChange = (text) => {
    dispatch(updatePostActionCreator(text));
  };
  return (
    <MyPosts
      addNewPost={addNewPost}
      onPostChange={onPostChange}
      newPostText={newPostText}
      posts={posts}
    />
  );
};

export default MyPostsContainer;
