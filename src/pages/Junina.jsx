import React from 'react';
import { useEasterEgg } from '../contexts/EasterEggContext';
import './Junina.css';

const Junina = () => {
  const { findEasterEgg } = useEasterEgg();

  const handleDateClick = () => {
    findEasterEgg('data-junina');
  };

  const handleBalloonClick = () => {
    findEasterEgg('simbolo-junino');
  };

  return (
    <div className="junina-container">
      <div className="junina-content">
        <div className="page-header">
          <h1>O Sabor da Tradição</h1>
          <h2>Nosso Arraial Particular</h2>
        </div>

        <div className="festa-decorations">
          <div className="bandeirinhas">
            <span className="bandeirinha rosa"></span>
            <span className="bandeirinha roxo"></span>
            <span className="bandeirinha violeta"></span>
            <span className="bandeirinha amarelo"></span>
            <span className="bandeirinha laranja"></span>
            <span className="bandeirinha rosa"></span>
            <span className="bandeirinha roxo"></span>
          </div>
        </div>

        <div className="arraial-content">
          <div className="festa-description">
            <h3>Sua Paixão Junina</h3>
            <p>
              Há algo mágico na forma como seus olhos brilham quando você 
              fala sobre Festa Junina. É como se toda a alegria e tradição 
              dessas celebrações encontrassem em você o lar perfeito.
            </p>
            
            <p>
              Você carrega consigo o espírito festivo, a alegria contagiante 
              e o amor pelas tradições que fazem das festas juninas algo tão 
              especial. É impossível não se encantar com sua paixão genuína.
            </p>
          </div>

          <div className="elementos-juninos">
            <div className="elemento-item">
              <span className="elemento-icon">🔥</span>
              <h4>Fogueira do Coração</h4>
              <p>Como uma fogueira junina, você aquece todos ao seu redor com sua personalidade calorosa.</p>
            </div>

            <div className="elemento-item">
              <span className="elemento-icon">🌽</span>
              <h4>Doçura Natural</h4>
              <p>Doce como milho cozido, você traz simplicidade e autenticidade para tudo que faz.</p>
            </div>

            <div className="elemento-item">
              <span className="elemento-icon">🎭</span>
              <h4>Alegria Contagiante</h4>
              <p>Sua energia festiva transforma qualquer ambiente em uma verdadeira celebração.</p>
            </div>
          </div>

          <div className="data-especial">
            <h3>Datas que Celebramos</h3>
            <div className="calendario-junino">
              <div className="data-card" onClick={handleDateClick}>
                <span className="data-numero">24</span>
                <span className="data-mes">Junho</span>
                <span className="data-santo">São João</span>
              </div>
              <p className="data-significado">
                O dia de São João, quando as fogueiras se acendem e os corações 
                se aquecem com a tradição e a alegria das festas juninas.
              </p>
            </div>
          </div>

          <div className="baloes-section">
            <h3>Balões de São João</h3>
            <div className="baloes-container">
              <div className="balao balao-1" onClick={handleBalloonClick}>🎈</div>
              <div className="balao balao-2">🎈</div>
              <div className="balao balao-3">🎈</div>
              <p className="baloes-text">
                Como balões de São João, nossos sonhos sobem juntos aos céus, 
                carregando nossos desejos e esperanças.
              </p>
            </div>
          </div>

          <div className="frutas-juninas">
            <div className="frutas-decoracao">
              <span className="fruta">🍓</span>
              <span className="fruta">🍒</span>
              <span className="fruta">🍇</span>
              <span className="fruta">🍓</span>
              <span className="fruta">🍒</span>
            </div>
            <p className="frutas-text">
              Como as frutas vermelhas que decoram as festas, você colore 
              minha vida com sua doçura e vivacidade.
            </p>
          </div>

          <div className="quadrilha-message">
            <div className="message-box">
              <h3>Nossa Própria Quadrilha</h3>
              <p>
                Se eu pudesse, organizaria uma festa junina só nossa, com fogueira, 
                quentão e muita música. Você seria minha parceira de quadrilha para 
                a vida toda! 💕
              </p>
              <span className="chapeu-emoji">🤠</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Junina;
