import React from 'react';
import { CandyCaneCard, ColorfulFrameCard } from '../components/Shared';

const Info = ({ onBack }) => {
  const END_DATE = "YYYY-MM-DD"; // <-- Insira a data limite aqui

  return (
    <div className="view-container">
      <button className="back-btn" onClick={onBack}>← Voltar</button>
      
      <CandyCaneCard>
        <h2 style={{ color: '#C72B70', fontSize: '1.2rem' }}>COMO FUNCIONA?</h2>
      </CandyCaneCard>

      <ColorfulFrameCard>
        <div style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
          <p><strong>Objetivo:</strong> Atingir a maior pontuação completando missões para sua empresa.</p>
          <hr style={{ margin: '10px 0', borderColor: '#ccc' }}/>
          <p><strong>Data Limite:</strong> Todas as missões devem ser concluídas até <strong>{END_DATE}</strong>.</p>
          <hr style={{ margin: '10px 0', borderColor: '#ccc' }}/>
          <p><strong>O Grande Prêmio:</strong> O 1º colocado no ranking final ganhará um site personalizado completo desenvolvido sob medida pelo nosso desenvolvedor secreto!</p>
          <hr style={{ margin: '10px 0', borderColor: '#ccc' }}/>
          <p><strong>Bônus para Todos:</strong> Ninguém sai perdendo! Todos os participantes que completarem o cadastro ganharão acesso e cadastro gratuito na <strong>Dots</strong>, a nova plataforma de serviços online que conectará as empresas da nossa cidade aos clientes.</p>
        </div>
      </ColorfulFrameCard>
    </div>
  );
};
export default Info;
