const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';

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
    },
  },
  getState() {
    return this._state;
  },
  _reRenderTree() {
    console.log('state was change');
  },
  dispatch(action) {
    if (action.type === 'ADD_POST') {
      const newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likesCount: 2,
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._reRenderTree(this._state);
    } else if (action.type === 'UPDATE_POST_TEXT') {
      this._state.profilePage.newPostText = action.payload;
      this._reRenderTree(this._state);
    }
  },
  subscribe(observer) {
    this._reRenderTree = observer;
  },
};

export const addNewPostActionCreator = () => ({ type: ADD_POST });

export const updatePostActionCreator = (data) => ({
  type: UPDATE_POST_TEXT,
  payload: data,
});

export default store;
