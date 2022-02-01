import './App.css';
import './styles/base.scss';
import Header from './components/header/Header';
import Rockets from './pages/rockets/Rockets';
import Missions from './pages/Missions';
import { Routes, Route } from 'react-router-dom';
import MyProfile from './pages/myProfile/MyProfile';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
