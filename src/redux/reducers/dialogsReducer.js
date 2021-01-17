const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

const initState = {
  messagesData: [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'Hi, my friends' },
    { id: 3, message: 'I am happy' },
  ],
  dialogsData: [
    { id: 1, name: 'Evgene' },
    { id: 2, name: 'Piter' },
    { id: 3, name: 'John' },
    { id: 4, name: 'Alex' },
  ],
  newMessageText: '',
};

const dialogsReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { id: 4, message: state.newMessageText },
        ],
        newMessageText: '',
      };
    case UPDATE_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.payload,
      };
    default:
      return state;
  }
};

export default dialogsReducer;

export const addNewMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateMessageActionCreator = (data) => ({
  type: UPDATE_MESSAGE_TEXT,
  payload: data,
});
