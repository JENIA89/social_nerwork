import { combineReducers, createStore } from 'redux';
import dialogsReducer from './reducers/dialogsReducer';
import profileReducer from './reducers/profileReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  userPage: userReducer,
});

const store = createStore(rootReducer);
export default store;
