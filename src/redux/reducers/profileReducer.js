const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initState = {
  postData: [
    { id: 1, message: 'Hi, how are you?', likesCount: 3 },
    { id: 2, message: 'first post', likesCount: 6 },
  ],
  newPostText: 'Введите текст поста...',
  profile: null,
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
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};

export default profilereducer;

export const addNewPost = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  payload: profile,
});
export const updatePost = (data) => ({
  type: UPDATE_POST_TEXT,
  payload: data,
});
