import React from 'react';
import { useEasterEgg } from '../contexts/EasterEggContext';
import './Tatuagens.css';

const Tatuagens = () => {
  const { findEasterEgg } = useEasterEgg();

  const handleMoonClick = () => {
    findEasterEgg('fase-lua');
  };

  const handleButterfliesClick = () => {
    findEasterEgg('contagem-borboletas');
  };

  return (
    <div className="tatuagens-container">
      <div className="tatuagens-content">
        <div className="page-header">
          <h1>Os Traços do Futuro</h1>
          <h2>Nossas Marcas Pessoais</h2>
        </div>

        <div className="tattoo-gallery">
          <div className="tattoo-canvas">
            <h3>Sua Arte Corporal Planejada</h3>
            
            <div className="tattoo-design moon-design" onClick={handleMoonClick}>
              <div className="design-sketch">
                <span className="moon-crescent">🌙</span>
                <span className="star-companion">⭐</span>
              </div>
              <div className="design-info">
                <h4>Lua Crescente com Estrela</h4>
                <p>
                  Delicada e minimalista, essa tattoo representa renovação 
                  e esperança. A lua crescente simboliza novos começos, 
                  enquanto a estrela representa seus sonhos e aspirações.
                </p>
              </div>
            </div>

            <div className="tattoo-design butterflies-design" onClick={handleButterfliesClick}>
              <div className="design-sketch">
                <span className="butterfly">🦋</span>
                <span className="butterfly butterfly-2">🦋</span>
                <span className="hidden-number">2</span>
              </div>
              <div className="design-info">
                <h4>Duas Borboletas Pequenas</h4>
                <p>
                  Símbolos de transformação e liberdade. Duas borboletas 
                  representam dualidade, parceria e a beleza da mudança. 
                  Pequenas e discretas, mas cheias de significado.
                </p>
              </div>
            </div>
          </div>

          <div className="personal-meaning">
            <h3>O Que Mais Me Encanta</h3>
            <div className="meaning-cards">
              <div className="meaning-card">
                <span className="card-icon">✨</span>
                <h4>Sua Personalidade</h4>
                <p>
                  O fato de você pensar cuidadosamente sobre cada detalhe, 
                  incluindo as tattoos que quer fazer, mostra sua natureza 
                  reflexiva e decidida.
                </p>
              </div>
              
              <div className="meaning-card">
                <span className="card-icon">🎨</span>
                <h4>Seu Gosto Artístico</h4>
                <p>
                  Escolhas delicadas e com significado profundo. Você não 
                  segue trends, você escolhe o que realmente ressoa com 
                  sua alma.
                </p>
              </div>
              
              <div className="meaning-card">
                <span className="card-icon">💭</span>
                <h4>Suas Escolhas</h4>
                <p>
                  Admiro como você planeja cada passo, cada decisão. 
                  Suas tattoos serão extensões da sua personalidade única 
                  e especial.
                </p>
              </div>
            </div>
          </div>

          <div className="supportive-message">
            <div className="message-content">
              <h3>Uma Mensagem Especial</h3>
              <p>
                Suas tattoos vão ser lindas porque elas vão carregar sua essência. 
                Cada traço será uma celebração de quem você é e de todos os 
                sonhos que carrega. E eu estarei aqui para admirar cada uma delas! 💕
              </p>
            </div>
          </div>
        </div>

        <div className="floating-elements">
          <span className="floating-flower flower-1">🌸</span>
          <span className="floating-flower flower-2">🌺</span>
          <span className="floating-sparkle sparkle-1">✨</span>
          <span className="floating-sparkle sparkle-2">✨</span>
          <span className="floating-sparkle sparkle-3">✨</span>
        </div>
      </div>
    </div>
  );
};

export default Tatuagens;
