const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const initState = {
  postData: [
    { id: 1, message: 'Hi, how are you?', likesCount: 3 },
    { id: 2, message: 'first post', likesCount: 6 },
  ],
  newPostText: 'Введите текст поста...',
};

const profilereducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 2,
      };
      state.postData.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_POST_TEXT:
      state.newPostText = action.payload;
      return state;
    default:
      return state;
  }
};

export default profilereducer;

export const addNewPostActionCreator = () => ({ type: ADD_POST });

export const updatePostActionCreator = (data) => ({
  type: UPDATE_POST_TEXT,
  payload: data,
});
