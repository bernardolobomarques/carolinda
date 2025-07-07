import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEasterEgg } from '../contexts/EasterEggContext';
import './NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { count, totalEggs } = useEasterEgg();

  const routes = [
    '/',
    '/sintonia',
    '/vagas',
    '/encontros',
    '/astrologia',
    '/tatuagens',
    '/junina',
    '/final'
  ];

  const currentIndex = routes.indexOf(location.pathname);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < routes.length - 1;

  const goToPrevious = () => {
    if (hasPrevious) {
      navigate(routes[currentIndex - 1]);
    }
  };

  const goToNext = () => {
    if (hasNext) {
      navigate(routes[currentIndex + 1]);
    }
  };

  return (
    <nav className="navbar">
      <button 
        className={`nav-button nav-previous ${!hasPrevious ? 'disabled' : ''}`}
        onClick={goToPrevious}
        disabled={!hasPrevious}
      >
        <span className="nav-arrow">←</span>
        Anterior
      </button>

      <div className="easter-egg-counter">
        <span className="counter-emoji">🍇</span>
        <span className="counter-display">{count}/{totalEggs}</span>
      </div>

      <button 
        className={`nav-button nav-next ${!hasNext ? 'disabled' : ''}`}
        onClick={goToNext}
        disabled={!hasNext}
      >
        Próxima
        <span className="nav-arrow">→</span>
      </button>
    </nav>
  );
};

export default NavBar;
