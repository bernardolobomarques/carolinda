import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="letter-paper">
        <div className="letter-header">
          <span className="letter-emoji">💌</span>
          <h1>Bem-Vinda à Nossa Aventura!</h1>
          <span className="letter-emoji">🍇</span>
        </div>
        
        <div className="letter-content">
          <p className="dear-carolina">Querida Carolina,</p>
          
          <p>
            Esta é uma carta especial, criada especialmente para você. 
            Uma jornada através dos nossos momentos mais especiais, 
            das nossas piadas internas e de tudo que torna nossa conexão única.
          </p>
          
          <p>
            Ao longo desta aventura, você descobrirá segredos escondidos, 
            memórias que guardamos com carinho e surpresas que preparei 
            pensando em cada detalhe que faz você sorrir.
          </p>
          
          <p>
            Cada página conta uma parte da nossa história, e há tesouros 
            esperando para serem descobertos por quem conhece todos os 
            nossos segredos... 🤫
          </p>
          
          <p className="letter-signature">
            Com todo meu carinho,<br/>
            <span className="signature">Seu admirador secreto ✨</span>
          </p>
        </div>
        
        <div className="stickers">
          <span className="sticker sticker-1">🍇</span>
          <span className="sticker sticker-2">❤️</span>
          <span className="sticker sticker-3">⭐</span>
          <span className="sticker sticker-4">🍓</span>
        </div>
        
        <button className="start-adventure-btn" onClick={() => navigate('/sintonia')}>
          <span className="btn-icon">🌟</span>
          Começar Aventura
          <span className="btn-icon">🌟</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
