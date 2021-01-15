import React from 'react';
import {
  addNewMessageActionCreator,
  updateMessageActionCreator,
} from '../../redux/reducers/dialogsReducer';
import DialogItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs';
import Message from './Message/Message';

const DialogsContainer = ({ state, dispatch }) => {
  const newMessageText = state.newMessageText;
  const dialogsElem = () =>
    state.dialogsData.map((item) => (
      <DialogItem name={item.name} id={item.id} key={item.id} />
    ));

  const messagesElem = () =>
    state.messagesData.map((item) => (
      <Message message={item.message} id={item.id} key={item.id} />
    ));

  const onMessageChange = (text) => {
    dispatch(updateMessageActionCreator(text));
  };

  const onSendMessage = () => {
    dispatch(addNewMessageActionCreator());
  };
  return (
    <Dialogs
      onSendMessage={onSendMessage}
      onMessageChange={onMessageChange}
      messagesElemHandler={messagesElem}
      dialogsElemHandler={dialogsElem}
      newMessageText={newMessageText}
    />
  );
};

export default DialogsContainer;
