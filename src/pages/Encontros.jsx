import React from 'react';
import { useEasterEgg } from '../contexts/EasterEggContext';
import './Encontros.css';

const Encontros = () => {
  const { findEasterEgg } = useEasterEgg();

  const handleBairroClick = () => {
    findEasterEgg('pista-ape');
  };

  const handleF1Click = () => {
    findEasterEgg('simbolo-f1');
  };

  return (
    <div className="encontros-container">
      <div className="encontros-content">
        <div className="page-header">
          <h1>Os Pontos de Encontro</h1>
          <h2>Coordenadas do Nosso Início</h2>
        </div>

        <div className="treasure-map">
          <div className="map-content">
            <div className="location-point dce-point">
              <div className="point-icon">🏛️</div>
              <div className="point-info">
                <h3>DCE - O Primeiro Contato</h3>
                <p>
                  Foi aqui que tudo começou. Entre conversas acadêmicas e risos 
                  espontâneos, descobrimos que tínhamos muito mais em comum do que 
                  apenas os estudos. Cada encontro casual no DCE se tornava mais 
                  especial que o anterior.
                </p>
              </div>
              <div className="connecting-line line-1"></div>
            </div>

            <div className="location-point cafe-point">
              <div className="point-icon">☕</div>
              <div className="point-info">
                <h3>Café em Copacabana</h3>
                <p>
                  Nossos encontros evoluíram do DCE para algo mais especial: um date 
                  em Copacabana! Entre o café e as conversas que fluíam naturalmente, 
                  descobrimos que nossa conexão estava se aprofundando. Foi nesse lugar 
                  especial em <span className="hidden-bairro" onClick={handleBairroClick}>Copa</span>
                  <span className="hidden-bairro2" onClick={handleBairroClick}>cabana</span> 
                  que percebemos que queríamos mais momentos assim juntos.
                </p>
              </div>
              <div className="connecting-line line-2"></div>
            </div>

            <div className="location-point apartamento-point">
              <div className="point-icon">🏠</div>
              <div className="point-info">
                <h3>Ela Veio ao Meu Lar</h3>
                <p>
                  Depois do nosso café especial em Copacabana, o próximo passo natural 
                  foi ela conhecer minha casa. Foi um momento único quando ela cruzou 
                  a porta do meu lar - cada cantinho ganhou um novo significado com sua 
                  presença. Saber que ela se sentiu à vontade no meu espaço foi mágico.
                </p>
              </div>
              <div className="connecting-line line-3"></div>
            </div>

            <div className="location-point cinema-point">
              <div className="point-icon">🎬</div>
              <div className="point-info">
                <h3>Cinema e Velocidade</h3>
                <p>
                  Nossa primeira experiência cinematográfica juntos! E que escolha especial 
                  foi assistir a um filme de Fórmula 1. 
                  <span className="f1-flag" onClick={handleF1Click}>🏁</span> 
                  Entre a adrenalina das corridas na tela e nossa própria energia, 
                  descobrimos mais uma paixão em comum.
                </p>
              </div>
            </div>
          </div>

          <div className="map-decorations">
            <span className="map-star star-1">⭐</span>
            <span className="map-star star-2">⭐</span>
            <span className="map-star star-3">⭐</span>
            <span className="sparkle sparkle-1">✨</span>
            <span className="sparkle sparkle-2">✨</span>
          </div>

          <div className="treasure-chest">
            <div className="chest-icon">💝</div>
            <p className="chest-text">Cada lugar guarda uma memória especial nossa</p>
          </div>
        </div>

        <div className="journey-summary">
          <h3>Nossa Jornada em Números</h3>
          <div className="journey-stats">
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">Lugares Especiais</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">∞</span>
              <span className="stat-label">Memórias Criadas</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1</span>
              <span className="stat-label">Conexão Única</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Encontros;
