import './App.css';
import './styles/base.scss';
import Header from './components/Header';
import Rockets from './pages/rockets/Rockets';
import Missions from './pages/Missions';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </div>
  );
}

export default App;
