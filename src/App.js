import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UserContainer from './components/User/UserContainer';

function App() {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <NavBar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
        <Route path='/users' render={() => <UserContainer />} />
      </div>
    </div>
  );
}

export default App;
