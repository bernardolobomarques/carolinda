import React, { useState } from 'react';
import { useEasterEgg } from '../contexts/EasterEggContext';
import './Vagas.css';

const Vagas = () => {
  const { findEasterEgg } = useEasterEgg();
  const [inputValue, setInputValue] = useState('');

  const handleInputSubmit = () => {
    if (inputValue.toLowerCase().includes('acompanhante de abraço para dormir')) {
      findEasterEgg('vaga-principal');
      setInputValue('');
    }
  };

  const handleOpalaClick = () => {
    findEasterEgg('apelido-opala');
  };

  return (
    <div className="vagas-container">
      <div className="vagas-content">
        <div className="page-header">
          <h1>As Brincadeiras</h1>
          <h2>Nossa Agência de Talentos Absurdos</h2>
        </div>

        <div className="document-paper">
          <div className="document-header">
            <h3>🏢 EDITAL DE VAGAS ESPECIAIS 🏢</h3>
            <p className="document-subtitle">Minha Cama Comigo - Departamento de Conforto e Aconchego</p>
            <p className="document-code">Edital nº 001/2025 - Setor de Recursos Afetivos</p>
          </div>

          <div className="vaga-principal">
            <h4>VAGA PRINCIPAL - CARGO ESTRATÉGICO</h4>
            <div className="vaga-details">
              <p><strong>Cargo:</strong> *************</p>
              <p><strong>Setor:</strong> Departamento de Sonhos e Aconchego</p>
              <p><strong>Descrição:</strong> Buscamos profissional para posição de extrema importância 
              no departamento de conforto noturno e bem-estar emocional.</p>
              
              <p><strong>Requisitos Obrigatórios:</strong></p>
              <ul>
                <li>Experiência comprovada em proporcionar aconchego</li>
                <li>Disponibilidade integral para horários noturnos</li>
                <li>Habilidade natural em regulagem de temperatura corporal</li>
                <li>Certificação em "Abraços Terapêuticos" (diferencial)</li>
                <li>Conhecimento em técnicas de relaxamento instantâneo</li>
                <li>Capacidade de transformar qualquer momento em especial</li>
              </ul>

              <p><strong>Benefícios Oferecidos:</strong></p>
              <ul>
                <li>Café da manhã na cama todos os dias</li>
                <li>Plano de saúde emocional completo</li>
                <li>Vale-carinho ilimitado</li>
                <li>Horário flexível (principalmente fins de semana preguiçosos)</li>
              </ul>

              <div className="input-section">
                <label>Digite exatamente o cargo que você gostaria de ocupar:</label>
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ex: Acompanhante de..."
                  className="vaga-input"
                />
                <button onClick={handleInputSubmit} className="submit-btn">
                  Candidatar-se Oficialmente ✨
                </button>
                <p className="hint-text">💡 Dica: Você tem essa informação, mas não no site.</p>
              </div>
            </div>
          </div>

          <div className="vagas-secundarias">
            <div className="vaga-card">
              <h4>Especialista em Experiência</h4>
              <p><strong>Diferencial:</strong> Preferimos candidatos com gosto refinado por experiência de vida. 
              Idade avançada é um <em>plus</em>! 😉</p>
              <p><strong>Observação:</strong> Esta vaga tem um critério peculiar - quanto mais maduro, melhor!</p>
            </div>

            <div className="vaga-card">
              <h4>Consultor de Brilho Especial</h4>
              <p><strong>Habilidades desejadas:</strong></p>
              <ul>
                <li>Capacidade de irradiar luz própria</li>
                <li>Experiência em mineralogia emocional</li>
                <li>Conhecimento em pedras preciosas, especialmente 
                  <span className="hidden-opala" onClick={handleOpalaClick}>op</span>ortunidades de 
                  <span className="hidden-opala2" onClick={handleOpalaClick}>ala</span>vancar relacionamentos</li>
              </ul>
            </div>

            <div className="vaga-card">
              <h4>Gerente de Momentos Especiais</h4>
              <p><strong>Responsabilidades:</strong></p>
              <ul>
                <li>Criar memórias inesquecíveis</li>
                <li>Transformar dias comuns em extraordinários</li>
                <li>Especialização em surpresas personalizadas</li>
              </ul>
            </div>
          </div>

          <div className="document-footer">
            <p className="footer-text">
              💼 Esta agência é especializada em talentos únicos e absurdos! 
              Todas as vagas são fictícias e criadas com muito carinho e humor! 💼
            </p>
          </div>
        </div>

        <div className="office-decorations">
          <span className="decoration star-1">⭐</span>
          <span className="decoration heart-1">❤️</span>
          <span className="decoration star-2">⭐</span>
          <span className="decoration heart-2">💕</span>
        </div>
      </div>
    </div>
  );
};

export default Vagas;
