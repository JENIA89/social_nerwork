import React from 'react';
import cls from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ posts }) => {
  return (
    <div className={cls.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
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
