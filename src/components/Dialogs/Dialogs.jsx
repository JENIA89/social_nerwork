import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import cls from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = ({ state }) => {
  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogsItems}>
        {state.dialogsData.map((item) => (
          <DialogItem name={item.name} id={item.id} key={item.id} />
        ))}
      </div>
      <div className={cls.dialogsMessages}>
        {state.messagesData.map((item) => (
          <Message message={item.message} id={item.id} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Dialogs;
