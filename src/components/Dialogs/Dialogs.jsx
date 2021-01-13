import React from 'react';
import {
  addNewMessageActionCreator,
  updateMessageActionCreator,
} from '../../redux/state';
import DialogItem from './DialogItem/DialogItem';
import cls from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = ({ state, dispatch }) => {
  const newMessageText = state.newMessageText;
  const dialogsElem = () =>
    state.dialogsData.map((item) => (
      <DialogItem name={item.name} id={item.id} key={item.id} />
    ));

  const messagesElem = () =>
    state.messagesData.map((item) => (
      <Message message={item.message} id={item.id} key={item.id} />
    ));

  const onMessageChange = (e) => {
    let text = e.target.value;
    dispatch(updateMessageActionCreator(text));
  };

  const onSendMessage = () => {
    dispatch(addNewMessageActionCreator());
  };
  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogsItems}>{dialogsElem()}</div>
      <div className={cls.dialogsMessages}>
        <div>{messagesElem()}</div>
        <div>
          <div>
            <textarea
              onChange={onMessageChange}
              value={newMessageText}
              placeholder='Enter your message'
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
