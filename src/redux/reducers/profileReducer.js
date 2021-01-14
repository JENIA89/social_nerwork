const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';

const profilereducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 2,
      };
      state.postData.push(newPost);
      state.newPostText = '';
      break;
    case UPDATE_POST_TEXT:
      state.newPostText = action.payload;
      break;
    default:
      return state;
  }
};

export default profilereducer;
