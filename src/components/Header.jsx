import React from 'react';
import './Header.css';

const Header = ({ userAvatarUrl, onAvatarClick }) => {
  return (
    <header className="header-container">
      <div className="header-content">
        <h1 className="game-title">ROTA DO SUCESSO</h1>
        
        <button className="avatar-button" onClick={onAvatarClick}>
          {/* Se não houver foto, mostra um ícone genérico ou cor sólida */}
          {userAvatarUrl ? (
            <img src={userAvatarUrl} alt="Perfil do Jogador" />
          ) : (
            <div className="avatar-placeholder">👤</div>
          )}
        </button>
      </div>

      {/* SVG que cria o efeito da borda derretida (icing drip) */}
      <div className="drip-border">
        <svg viewBox="0 0 100 20" preserveAspectRatio="none">
          <path 
            d="M0,0 L0,5 C5,15 10,2 15,8 C20,14 25,18 30,5 C35,-5 40,15 45,10 C50,5 55,20 60,8 C65,-2 70,12 75,5 C80,-2 85,15 90,8 C95,1 100,10 100,10 L100,0 Z" 
            fill="#FFB6C1" 
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
