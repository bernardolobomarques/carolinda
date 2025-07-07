import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EasterEggProvider } from './contexts/EasterEggContext';
import NavBar from './components/NavBar';
import PopUp from './components/PopUp';
import Home from './pages/Home';
import Sintonia from './pages/Sintonia';
import Vagas from './pages/Vagas';
import Encontros from './pages/Encontros';
import Astrologia from './pages/Astrologia';
import Tatuagens from './pages/Tatuagens';
import Junina from './pages/Junina';
import Final from './pages/Final';
import './App.css';

function App() {
  return (
    <EasterEggProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sintonia" element={<Sintonia />} />
            <Route path="/vagas" element={<Vagas />} />
            <Route path="/encontros" element={<Encontros />} />
            <Route path="/astrologia" element={<Astrologia />} />
            <Route path="/tatuagens" element={<Tatuagens />} />
            <Route path="/junina" element={<Junina />} />
            <Route path="/final" element={<Final />} />
          </Routes>
          <NavBar />
          <PopUp />
        </div>
      </Router>
    </EasterEggProvider>
  );
}

export default App;
