const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: 4,
        message: state.newMessageText,
      };
      state.messagesData.push(newMessage);
      state.newMessageText = '';
      break;
    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.payload;
      break;
    default:
      return state;
  }
};

export default dialogsReducer;
