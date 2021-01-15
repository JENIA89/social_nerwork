import dialogsReducer from './reducers/dialogsReducer';
import profilereducer from './reducers/profileReducer';

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

export default store;
