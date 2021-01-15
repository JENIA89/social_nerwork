import { combineReducers, createStore } from 'redux';
import dialogsReducer from './reducers/dialogsReducer';
import profilereducer from './reducers/profileReducer';

const rootReducer = combineReducers({
  profilePage: profilereducer,
  dialogsPage: dialogsReducer,
});

const store = createStore(rootReducer);
export default store;
