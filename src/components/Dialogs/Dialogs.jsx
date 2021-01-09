import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import cls from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = () => {
  const dialogsData = [
    { id: 1, name: 'Evgene' },
    { id: 2, name: 'Piter' },
    { id: 3, name: 'John' },
    { id: 4, name: 'Alex' },
  ];

  const messagesData = [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'Hi, my friends' },
    { id: 3, message: 'I am happy' },
  ];
  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogsItems}>
        {dialogsData.map((item) => (
          <DialogItem name={item.name} id={item.id} key={item.id} />
        ))}
      </div>
      <div className={cls.dialogsMessages}>
        {messagesData.map((item) => (
          <Message message={item.message} id={item.id} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Dialogs;
