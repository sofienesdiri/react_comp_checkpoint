import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './component/Profile/ProfilePhoto';
import Fullname from './component/Profile/Fullname';
import Adresse from './component/Profile/Adresse';

function App() {
  return (
    <div className='main'>
     <ProfilePhoto className='profile'/>
     <Fullname/>
     <Adresse/>
    </div>
  );
}

export default App;
