import React, { useState } from 'react';
import { useEasterEgg } from '../contexts/EasterEggContext';
import fotoProNta from '../assets/foto_pronta.png';
import './Final.css';

const Final = () => {
  const { count, totalEggs } = useEasterEgg();
  const [showFirstPrize, setShowFirstPrize] = useState(false);
  const [showSecondPrize, setShowSecondPrize] = useState(false);
  
  const hasSevenEggs = count >= 7;
  const hasAllEggs = count === totalEggs;

  const handleFirstPrizeClick = () => {
    if (hasSevenEggs) {
      setShowFirstPrize(true);
    }
  };

  const handleSecondPrizeClick = () => {
    if (hasAllEggs) {
      setShowSecondPrize(true);
    }
  };

  const renderPrize = () => {
    if (!hasSevenEggs) {
      return (
        <div className="no-prize">
          <h3>Continue Explorando!</h3>
          <p>
            Você encontrou {count} de {totalEggs} easter eggs. 
            Precisa de pelo menos 7 para descobrir o primeiro tesouro!
          </p>
        </div>
      );
    }

    return (
      <div className="prizes-section">
        {/* Primeiro Prêmio */}
        <div className="prize-item">
          <button 
            className={`prize-button ${hasSevenEggs ? 'active' : 'disabled'}`}
            onClick={handleFirstPrizeClick}
            disabled={!hasSevenEggs}
          >
            🎁 Descobrir Primeiro Tesouro! (7+ easter eggs)
          </button>
          
          {showFirstPrize && (
            <div className="first-prize">
              <h3>� PRIMEIRO TESOURO DESCOBERTO! �</h3>
              <div className="first-prize-content">
                <div className="prize-reveal">
                  <h4>💝 Uma Mensagem Especial Para Você �</h4>
                  <div className="prize-box">
                    <p className="special-message">
                      "Carolina, você é incrível e eu gosto muito de você! ❤️ 
                      Mesmo quando você diz que os reels que eu mando vão te ocupar 
                      demais, saiba que eu vou continuar mandando mesmo assim! 😄 
                      Porque ver sua reação e saber que você se diverte com eles 
                      é uma das coisas que mais me fazem sorrir. Você ilumina 
                      meus dias de uma forma única e especial! ✨"
                    </p>
                  </div>
                </div>
                <div className="encourage-continue">
                  <p>
                    💡 <strong>Psiu!</strong> Se você encontrar todos os {totalEggs} easter eggs, 
                    tem uma surpresa ainda mais especial esperando! Vale muito a pena terminar 
                    a missão... 😉�
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Segundo Prêmio */}
        {hasAllEggs && (
          <div className="prize-item">
            <button 
              className="prize-button ultimate active"
              onClick={handleSecondPrizeClick}
            >
              🏆 Descobrir Grande Tesouro Final! (12 easter eggs)
            </button>
            
            {showSecondPrize && (
              <div className="grand-prize">
                <h3>� PARABÉNS! GRANDE TESOURO DESCOBERTO! �</h3>
                <div className="grand-prize-content">
                  <p className="prize-announcement">
                    Você encontrou TODOS os easter eggs! Aqui está seu grande prêmio...
                  </p>
                  <div className="ultimate-reveal">
                    <h4>🎁 SEU GRANDE TESOURO 🎁</h4>
                    <div className="prize-box">
                      <div className="cartoon-photo">
                        <img src={fotoProNta} alt="Nossa foto cartoonizada" className="prize-photo" />
                      </div>
                      <div className="special-invite">
                        <h5>🏋️‍♀️ Convite Especial 🏋️‍♀️</h5>
                        <p>
                          Que tal treinarmos juntos na quarta à tarde? 💪 
                          Eu sei que já combinamos, mas este é o convite oficial 
                          e especial da nossa constelação secreta! 
                        </p>
                        <p className="bonus">
                          <strong>BÔNUS:</strong> cardio?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="final-container">
      <div className="final-content">
        <div className="page-header">
          <h1>O Tesouro Revelado!</h1>
          <h2>Final da Nossa Aventura</h2>
        </div>

        <div className="counter-display">
          <div className="egg-counter">
            <span className="counter-number">{count}</span>
            <span className="counter-separator">/</span>
            <span className="counter-total">{totalEggs}</span>
          </div>
          <p className="counter-text">Easter eggs encontrados</p>
        </div>

        <div className="treasure-section">
          <div className="prize-container">
            {renderPrize()}
          </div>
        </div>

        <div className="journey-complete">
          <h3>Nossa Jornada</h3>
          <p>
            Obrigado por embarcar nesta aventura comigo! Cada página foi 
            criada pensando em você, em nós e em todos os momentos especiais 
            que compartilhamos. Espero que tenha se divertido tanto quanto 
            eu me diverti criando esta surpresa para você.
          </p>
          <div className="final-emojis">
            <span className="final-emoji">🍇</span>
            <span className="final-emoji">❤️</span>
            <span className="final-emoji">⭐</span>
            <span className="final-emoji">🌟</span>
            <span className="final-emoji">💕</span>
          </div>
        </div>

        <div className="sparkles-effect">
          <span className="sparkle sparkle-1">✨</span>
          <span className="sparkle sparkle-2">🌟</span>
          <span className="sparkle sparkle-3">✨</span>
          <span className="sparkle sparkle-4">⭐</span>
          <span className="sparkle sparkle-5">✨</span>
          <span className="sparkle sparkle-6">🌟</span>
        </div>
      </div>
    </div>
  );
};

export default Final;
