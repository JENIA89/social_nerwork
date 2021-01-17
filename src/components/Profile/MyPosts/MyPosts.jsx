import React from 'react';
import cls from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const refPost = React.createRef();
  const onAddNewPost = () => {
    props.addNewPost();
  };

  const onPostChangeHandler = () => {
    const text = refPost.current.value;
    props.onPostChange(text);
  };
  return (
    <div className={cls.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea
            ref={refPost}
            onChange={onPostChangeHandler}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddNewPost}>Add post</button>
        </div>
      </div>
      <div className={cls.posts}>
        {props.postData.map((item) => (
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
