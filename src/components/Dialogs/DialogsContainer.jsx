import { connect } from 'react-redux';
import {
  addNewMessageActionCreator,
  updateMessageActionCreator,
} from '../../redux/reducers/dialogsReducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogsPage.newMessageText,
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSendMessage: () => dispatch(addNewMessageActionCreator()),
    onMessageChange: (text) => dispatch(updateMessageActionCreator(text)),
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
