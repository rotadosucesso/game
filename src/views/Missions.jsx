import React from 'react';
import { CandyCaneCard, ColorfulFrameCard } from '../components/Shared';

const Missions = ({ user, onBack }) => {
  const END_DATE = "YYYY-MM-DD"; // <-- Insira a data limite aqui

  // Lógica de filtro: launch_day <= hoje E users_done não contém user.unique_code
  const mockMissions = [
    { mission_code: 'M01', title: 'Convide 5 amigos', reward: 500, launch_day: '2023-10-01', type: 'daily' },
    { mission_code: 'M02', title: 'Qual a sua maior dificuldade empreendendo?', reward: 200, launch_day: '2023-09-28', type: 'past' }
  ];

  return (
    <div className="view-container">
      <button className="back-btn" onClick={onBack}>← Voltar</button>
      
      <CandyCaneCard>
        <h3 style={{ color: '#C72B70' }}>MISSÃO DIÁRIA</h3>
        <p style={{ fontWeight: 'bold', margin: '10px 0' }}>{mockMissions[0].title}</p>
        <span style={{ background: '#FFD700', padding: '5px 10px', borderRadius: '10px', fontWeight: '900' }}>+{mockMissions[0].reward} pts</span>
      </CandyCaneCard>

      <ColorfulFrameCard title="MISSÕES ANTERIORES PENDENTES">
        <p style={{ fontSize: '0.8rem', textAlign: 'center', marginBottom: '10px' }}>Prazo final: {END_DATE}</p>
        {mockMissions.filter(m => m.type === 'past').map((m, idx) => (
          <div key={idx} style={{ background: '#FFF', padding: '10px', borderRadius: '10px', marginBottom: '10px', border: '1px solid #ccc' }}>
            <p style={{ fontWeight: 'bold' }}>{m.title}</p>
            <span style={{ color: '#D97706', fontSize: '0.9rem', fontWeight: 'bold' }}>Recompensa: {m.reward} pts</span>
          </div>
        ))}
      </ColorfulFrameCard>
    </div>
  );
};
export default Missions;
