import React from 'react';
import cls from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ posts, newPostText, addPost, updatePostText }) => {
  const refPost = React.createRef();
  const addNewPost = () => {
    addPost();
  };

  const onPostChange = () => {
    const text = refPost.current.value;
    updatePostText(text);
  };
  return (
    <div className={cls.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea ref={refPost} onChange={onPostChange} value={newPostText} />
        </div>
        <div>
          <button onClick={addNewPost}>Add post</button>
        </div>
      </div>
      <div className={cls.posts}>
        {posts.map((item) => (
          <Post
            message={item.message}
            id={item.id}
            key={item.id}
            likesCount={item.likesCount}
          />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
