import React from 'react';
import cls from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
  const dialogsElem = () =>
    props.dialogsData.map((item) => (
      <DialogItem name={item.name} id={item.id} key={item.id} />
    ));

  const messagesElem = () =>
    props.messagesData.map((item) => (
      <Message message={item.message} id={item.id} key={item.id} />
    ));

  const onMessageChangeHandler = (e) => {
    let text = e.target.value;
    props.onMessageChange(text);
  };

  const onSendMessageHandler = () => {
    props.onSendMessage();
  };
  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogsItems}>{dialogsElem()}</div>
      <div className={cls.dialogsMessages}>
        <div>{messagesElem()}</div>
        <div>
          <div>
            <textarea
              onChange={onMessageChangeHandler}
              value={props.newMessageText}
              placeholder='Enter your message'
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageHandler}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
