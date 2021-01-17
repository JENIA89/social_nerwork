import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/profile' render={() => <Profile />} />
      </div>
    </div>
  );
}

export default App;
