import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

import Home from './home';
import Profile from './profile';
import Settings from './settings';



function App() {
  return (
    <>App
    <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to="profile">Profile</Link>
    <Link to="settings">Settings</Link>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path="settings" element={<Settings/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
