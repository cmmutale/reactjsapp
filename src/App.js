// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import RootLayout from './layouts/RootLayout';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Todo from './pages/Todo';
import About from './pages/About';
import MeetTeam from './pages/MeetTeam';

function App() {
  return (
    <div className='w-full'>
      <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="/meet-the-team" element={<MeetTeam />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
