import React from 'react';
import { useEasterEgg } from '../contexts/EasterEggContext';
import './Sintonia.css';

const Sintonia = () => {
  const { findEasterEgg } = useEasterEgg();

  const handleMirrorClick = () => {
    findEasterEgg('voce-sou-eu');
  };

  const handleCarolindaClick = () => {
    findEasterEgg('apelido-carolinda');
  };

  return (
    <div className="sintonia-container">
      <div className="sintonia-content">
        <div className="page-header">
          <h1>A Descoberta da Sintonia</h1>
          <h2>O Labirinto da Alma Gêmea</h2>
        </div>

        <div className="mirror-section">
          <div className="silhouettes">
            <div className="silhouette silhouette-left silhouette-male"></div>
            <div className="mirror-line" onClick={handleMirrorClick}>
              <span className="hidden-phrase">você sou eu só que mulher</span>
            </div>
            <div className="silhouette silhouette-right silhouette-female"></div>
          </div>
        </div>

        <div className="content-text">
          <p>
            Existe algo mágico quando duas pessoas se encontram e descobrem 
            que compartilham os mesmos pensamentos, as mesmas piadas internas 
            e a mesma forma única de ver o mundo.
          </p>
          
          <p>
            Nossa sintonia vai além das palavras. É como se fôssemos duas partes 
            de um mesmo quebra-cabeças, que se encaixam perfeitamente. Cada conversa 
            nossa é uma descoberta, cada risada é uma confirmação de que encontramos 
            algo especial.
          </p>
          
          <p>
            Você tem essa capacidade incrível de entender minhas referências mais 
            obscuras e de criar piadas que só nós dois entendemos. É como se nossa 
            <span className="hidden-nickname" onClick={handleCarolindaClick}>
              Carol
            </span>aboração mental fosse automática, natural, como se tivéssemos 
            nascido para isso.
          </p>
          
          <p>
            E o mais bonito de tudo é que nossa conexão só cresce. A cada dia 
            descobrimos novas camadas dessa sintonia, novos detalhes que confirmam 
            o quão especial é o que temos.
          </p>
        </div>

        <div className="floating-emojis">
          <span className="floating-emoji emoji-1">🍇</span>
          <span className="floating-emoji emoji-2">❤️</span>
          <span className="floating-emoji emoji-3">🍇</span>
          <span className="floating-emoji emoji-4">❤️</span>
          <span className="floating-emoji emoji-5">🍇</span>
        </div>

        <div className="stickers-sintonia">
          <div className="sticker-matching">Matching ✨</div>
          <div className="sticker-soulmates">Soulmates 💕</div>
        </div>
      </div>
    </div>
  );
};

export default Sintonia;
