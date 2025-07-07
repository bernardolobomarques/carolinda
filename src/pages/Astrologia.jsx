import React from 'react';
import { useEasterEgg } from '../contexts/EasterEggContext';
import './Astrologia.css';

const Astrologia = () => {
  const { findEasterEgg } = useEasterEgg();

  const handleLibraClick = () => {
    findEasterEgg('signo-dela');
  };

  const handleEscorpiaoClick = () => {
    findEasterEgg('signo-presente');
  };

  return (
    <div className="astrologia-container">
      <div className="astrologia-content">
        <div className="page-header">
          <h1>O Cosmos de Vocês</h1>
          <h2>Nossa Astrologia de Conexões</h2>
        </div>

        <div className="astro-circle">
          <div className="center-text">
            <h3>Mapa Astrológico</h3>
            <p>As estrelas contam nossa história</p>
          </div>

          <div className="planet sol">
            <span className="planet-symbol">☉</span>
            <div className="planet-info">
              <strong>Sol em <span className="escorpiao-symbol" onClick={handleEscorpiaoClick}>♏</span></strong>
              <small>Intensidade e paixão</small>
            </div>
          </div>

          <div className="planet lua">
            <span className="planet-symbol">☽</span>
            <div className="planet-info">
              <strong>Lua em Câncer</strong>
              <small>Sensibilidade e cuidado</small>
            </div>
          </div>

          <div className="planet mercurio">
            <span className="planet-symbol">☿</span>
            <div className="planet-info">
              <strong>Mercúrio em <span className="escorpiao-symbol2" onClick={handleEscorpiaoClick}>♏</span></strong>
              <small>Comunicação profunda</small>
            </div>
          </div>

          <div className="planet venus">
            <span className="planet-symbol">♀</span>
            <div className="planet-info">
              <strong>Vênus em Sagitário</strong>
              <small>Amor aventureiro</small>
            </div>
          </div>

          <div className="planet marte">
            <span className="planet-symbol">♂</span>
            <div className="planet-info">
              <strong>Marte em Leão</strong>
              <small>Energia criativa</small>
            </div>
          </div>

          <div className="planet jupiter">
            <span className="planet-symbol">♃</span>
            <div className="planet-info">
              <strong>Júpiter em Peixes</strong>
              <small>Expansão emocional</small>
            </div>
          </div>
        </div>

        <div className="compatibility-section">
          <h3>Nossa Compatibilidade Cósmica</h3>
          <div className="compatibility-cards">
            <div className="compat-card">
              <h4>Elemento Água</h4>
              <p>
                Sua natureza emocional e intuitiva se harmoniza perfeitamente 
                com a profundidade que busco. Somos como duas gotas que se 
                encontram no oceano infinito.
              </p>
            </div>
            
            <div className="compat-card special-card">
              <h4>Conexão Especial</h4>
              <p>
                As estrelas dizem que pessoas com energias complementares como 
                as nossas criam vínculos únicos. E há algo sobre 
                <span className="hidden-libra" onClick={handleLibraClick}>♎</span> 
                que equilibra perfeitamente nossa intensidade.
              </p>
            </div>

            <div className="compat-card">
              <h4>Magnetismo Cósmico</h4>
              <p>
                Nossa atração vai além do físico - é cósmica! Os planetas 
                se alinharam de forma especial quando nos conhecemos, 
                criando uma conexão que transcende o comum.
              </p>
            </div>
          </div>
        </div>

        <div className="cosmic-quote">
          <blockquote>
            "No vasto universo de possibilidades, nossas almas escolheram 
            se encontrar nesta vida, neste momento, sob estas estrelas."
          </blockquote>
          <cite>— O Cosmos, sobre nós 🌟</cite>
        </div>

        <div className="stars-background">
          <span className="star star-1">⭐</span>
          <span className="star star-2">✨</span>
          <span className="star star-3">🌟</span>
          <span className="star star-4">⭐</span>
          <span className="star star-5">✨</span>
          <span className="moon-emoji">🌙</span>
        </div>
      </div>
    </div>
  );
};

export default Astrologia;
