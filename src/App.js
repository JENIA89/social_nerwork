import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';

function App({ dispatch, state }) {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
        <Route
          path='/dialogs'
          render={() => (
            <Dialogs state={state.dialogsPage} dispatch={dispatch} />
          )}
        />
        <Route
          path='/profile'
          render={() => (
            <Profile profilePage={state.profilePage} dispatch={dispatch} />
          )}
        />
      </div>
    </div>
  );
}

export default App;
