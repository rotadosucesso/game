import React from 'react';
import { Trophy, ClipboardList, MessageSquare, HelpCircle } from 'lucide-react';
import { BubbleButton, CandyCaneCard, ColorfulFrameCard } from '../components/Shared';

const Home = ({ onNavigate, user }) => {
  const progressPercent = (user.missoes_concluidas / user.missoes_total) * 100;

  return (
    <div className="view-container">
      <div className="grid-menu">
        <BubbleButton icon={<Trophy size={32}/>} label="RANKING" theme="theme-green" onClick={() => onNavigate('ranking')} />
        <BubbleButton icon={<ClipboardList size={32}/>} label="MISSÕES" theme="theme-blue" onClick={() => onNavigate('missions')} />
        <BubbleButton icon={<MessageSquare size={32}/>} label="FEED" theme="theme-purple" onClick={() => onNavigate('feed')} />
        <BubbleButton icon={<HelpCircle size={32}/>} label="INFO" theme="theme-pink" onClick={() => onNavigate('info')} />
      </div>

      <CandyCaneCard>
        <h2 style={{ color: '#C72B70', fontSize: '1.2rem', marginBottom: '5px' }}>PRÊMIO FINAL: SITE PERSONALIZADO!</h2>
        <p style={{ fontSize: '0.9rem' }}>PARA O 1º COLOCADO EM PONTUAÇÃO!</p>
      </CandyCaneCard>

      <ColorfulFrameCard title="TOP 3 COLOCADOS ATUAL">
        <div className="rank-row"><span className="rank-pos">🥇</span><span className="rank-name">Supermercado Silva</span><span className="rank-score">4,500 pts</span></div>
        <div className="rank-row"><span className="rank-pos">🥈</span><span className="rank-name">Oficina Carro Bom</span><span className="rank-score">3,900 pts</span></div>
        <div className="rank-row"><span className="rank-pos">🥉</span><span className="rank-name">Loja da Cláudia</span><span className="rank-score">3,200 pts</span></div>
      </ColorfulFrameCard>

      <ColorfulFrameCard title="SEU PROGRESSO">
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>{user.missoes_concluidas} / {user.missoes_total} MISSÕES CONCLUÍDAS</div>
        <div className="progress-container"><div className="progress-fill" style={{ width: `${progressPercent}%` }}></div></div>
      </ColorfulFrameCard>
    </div>
  );
};
export default Home;
