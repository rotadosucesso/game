import React from 'react';
import { ColorfulFrameCard } from '../components/Shared';

const Feed = ({ onBack }) => {
  // Lógica para exibição do mural. No frontend/backend real, filtrar onde (Date.now() - created_at < 24h)
  const mockAnswers = [
    { user_posting: 'Supermercado Silva', mission_code: 'M02', answer: 'Minha maior dificuldade é a logística de entrega na região.', time_ago: '2h atrás', comments: [
      { user_comment: 'Oficina Carro Bom', comment_content: 'Concordo, sofro com o mesmo!' }
    ]}
  ];

  return (
    <div className="view-container">
      <button className="back-btn" onClick={onBack}>← Voltar</button>
      <ColorfulFrameCard title="MURAL DE MISSÕES (24H)">
        <p style={{fontSize: '0.8rem', textAlign: 'center', color: '#666', marginBottom: '15px'}}>As respostas e apoios desaparecem em 24h!</p>
        {mockAnswers.map((post, idx) => (
          <div className="feed-post" key={idx}>
            <div className="feed-header">
              <strong>{post.user_posting}</strong>
              <span>{post.time_ago}</span>
            </div>
            <div className="feed-content">"{post.answer}"</div>
            
            <div style={{ marginTop: '10px', borderTop: '1px solid #eee', paddingTop: '10px' }}>
              <strong style={{ fontSize: '0.8rem', color: '#8B4513' }}>Comentários de Apoio:</strong>
              {post.comments.map((c, cIdx) => (
                <div className="feed-comment" key={cIdx}>
                  <strong>{c.user_comment}:</strong> {c.comment_content}
                </div>
              ))}
            </div>
          </div>
        ))}
      </ColorfulFrameCard>
    </div>
  );
};
export default Feed;
