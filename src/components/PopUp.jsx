import React, { useEffect } from 'react';
import { useEasterEgg } from '../contexts/EasterEggContext';
import './PopUp.css';

const PopUp = () => {
  const { showPopup, count, totalEggs, hidePopup } = useEasterEgg();

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        hidePopup();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup, hidePopup]);

  if (!showPopup) return null;

  return (
    <div className="popup-overlay" onClick={hidePopup}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <span className="popup-emoji">🎉</span>
          <h3>Parabéns!</h3>
          <span className="popup-emoji">🍇</span>
        </div>
        <p>Você achou um easter egg!</p>
        <div className="popup-counter">
          <span className="counter-text">
            {count}/{totalEggs} easter eggs encontrados
          </span>
        </div>
        <button className="popup-close" onClick={hidePopup}>
          Continuar explorando ✨
        </button>
      </div>
    </div>
  );
};

export default PopUp;
