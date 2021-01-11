let reRenderTree = () => {
  console.log('state was change');
};

const state = {
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
};

export const addPost = () => {
  const newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likesCount: 2,
  };
  state.profilePage.postData.push(newPost);
  state.profilePage.newPostText = '';
  reRenderTree(state);
};

export const updatePostText = (text) => {
  state.profilePage.newPostText = text;
  reRenderTree(state);
};

export const subscribe = (observer) => {
  reRenderTree = observer;
};

export default state;
