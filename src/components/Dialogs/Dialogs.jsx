import React from 'react';
import cls from './Dialogs.module.css';

const Dialogs = ({
  onSendMessage,
  messagesElemHandler,
  dialogsElemHandler,
  onMessageChange,
  newMessageText,
}) => {
  const dialogsElem = () => dialogsElemHandler();

  const messagesElem = () => messagesElemHandler();

  const onMessageChangeHandler = (e) => {
    let text = e.target.value;
    onMessageChange(text);
  };

  const onSendMessageHandler = () => {
    onSendMessage();
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
              value={newMessageText}
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
