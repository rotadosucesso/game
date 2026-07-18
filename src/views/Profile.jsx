import React from 'react';
import { ColorfulFrameCard } from '../components/Shared';

const Profile = ({ user, onBack }) => {
  return (
    <div className="view-container">
      <button className="back-btn" onClick={onBack}>← Voltar</button>
      <ColorfulFrameCard title="SEU PERFIL">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <div className="avatar-btn" style={{ width: '80px', height: '80px', pointerEvents: 'none' }}>
            {user.perfil_img ? <img src={user.perfil_img} alt="Perfil" /> : <span style={{fontSize: '2rem'}}>👤</span>}
          </div>
          <h2 style={{ color: '#1E3A8A' }}>{user.loja}</h2>
          
          <div style={{ background: '#FFF', padding: '15px', borderRadius: '15px', width: '100%', marginTop: '15px', border: '2px solid #E5E7EB' }}>
            <p><strong>Seu Código Único:</strong> <span style={{ color: '#D97706', fontWeight: 'bold' }}>{user.unique_code}</span></p>
            <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>Compartilhe este código para a missão de indicações!</p>
          </div>
          
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: '10px', background: '#FFF0F5', padding: '15px', borderRadius: '15px' }}>
             <strong>Pontuação Atual:</strong>
             <span style={{ color: '#C72B70', fontWeight: '900' }}>{user.score} pts</span>
          </div>
        </div>
      </ColorfulFrameCard>
    </div>
  );
};
export default Profile;
