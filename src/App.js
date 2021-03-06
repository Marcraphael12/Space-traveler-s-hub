import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/base.scss';
import Header from './components/header/Header';
import Rockets from './pages/rockets/Rockets';
import Missions from './components/missions/missions';
import MyProfile from './pages/myProfile/MyProfile';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
