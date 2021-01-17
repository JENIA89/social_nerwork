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
      return {
        ...state,
        postData: [
          ...state.postData,
          { id: 3, message: state.newPostText, likesCount: 2 },
        ],
        newPostText: '',
      };
    case UPDATE_POST_TEXT:
      return {
        ...state,
        newPostText: action.payload,
      };
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
