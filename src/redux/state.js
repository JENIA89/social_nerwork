import dialogsReducer from './reducers/dialogsReducer';
import profilereducer from './reducers/profileReducer';

const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

const store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: 'Hi, how are you?', likesCount: 3 },
        { id: 2, message: 'first post', likesCount: 6 },
      ],
      newPostText: 'Введите текст поста...',
    },
    dialogsPage: {
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
    },
  },
  getState() {
    return this._state;
  },
  _reRenderTree() {
    console.log('state was change');
  },
  dispatch(action) {
    profilereducer(this._state.profilePage, action);
    dialogsReducer(this._state.dialogsPage, action);
    this._reRenderTree(this._state);
  },
  subscribe(observer) {
    this._reRenderTree = observer;
  },
};

export const addNewPostActionCreator = () => ({ type: ADD_POST });

export const addNewMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updatePostActionCreator = (data) => ({
  type: UPDATE_POST_TEXT,
  payload: data,
});

export const updateMessageActionCreator = (data) => ({
  type: UPDATE_MESSAGE_TEXT,
  payload: data,
});

export default store;
