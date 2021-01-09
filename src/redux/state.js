const state = {
  profilePage: {
    postData: [
      { id: 1, message: 'Hi, how are you?', likesCount: 3 },
      { id: 2, message: 'first post', likesCount: 6 },
    ],
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

export default state;
