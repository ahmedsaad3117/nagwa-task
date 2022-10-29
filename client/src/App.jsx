import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home'
import FinalScore from './components/FinalScore/FinalScore';
import "./App.css";


function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="rank" element={<FinalScore />} />
    </Routes>
    </div>
  );
}

export default App;
