import React from 'react';
import { ColorfulFrameCard } from '../components/Shared';

const Ranking = ({ onBack }) => {
  // Mock de dados que virão da tabela 'users' (ordenados por score DESC)
  const allUsers = [
    { pos: 1, img: null, loja: 'Supermercado Silva', score: 4500 },
    { pos: 2, img: null, loja: 'Oficina Carro Bom', score: 3900 },
    { pos: 3, img: null, loja: 'Loja da Cláudia', score: 3200 },
    { pos: 4, img: null, loja: 'Minha Loja (Você)', score: 1500 },
  ];

  return (
    <div className="view-container">
      <button className="back-btn" onClick={onBack}>← Voltar</button>
      <ColorfulFrameCard title="RANKING GERAL">
        {allUsers.map((u, idx) => (
          <div className="rank-row" key={idx}>
            <span className="rank-pos">{u.pos}º</span>
            <div className="rank-avatar" style={{ background: u.img ? 'transparent' : '#ccc' }}>
               {u.img && <img src={u.img} alt="avatar" style={{width:'100%', borderRadius:'50%'}}/>}
            </div>
            <span className="rank-name">{u.loja}</span>
            <span className="rank-score">{u.score} pts</span>
          </div>
        ))}
      </ColorfulFrameCard>
    </div>
  );
};
export default Ranking;
