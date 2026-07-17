import React from 'react';

export const Header = ({ userAvatarUrl, onAvatarClick, showBack, onBack }) => (
  <header className="header-container">
    <h1 className="header-title">ROTA DO SUCESSO</h1>
    <button className="avatar-btn" onClick={onAvatarClick}>
      {userAvatarUrl ? <img src={userAvatarUrl} alt="Perfil" /> : <span>👤</span>}
    </button>
    <div className="drip-border">
      <svg viewBox="0 0 100 20" preserveAspectRatio="none">
        <path d="M0,0 L0,5 C5,15 10,2 15,8 C20,14 25,18 30,5 C35,-5 40,15 45,10 C50,5 55,20 60,8 C65,-2 70,12 75,5 C80,-2 85,15 90,8 C95,1 100,10 100,10 L100,0 Z" fill="#FFB6C1" />
      </svg>
    </div>
  </header>
);

export const BubbleButton = ({ icon, label, theme, onClick }) => (
  <button className={`bubble-btn ${theme}`} onClick={onClick}>
    <div className="bubble-icon">{icon}</div>
    <span>{label}</span>
  </button>
);

export const CandyCaneCard = ({ children }) => (
  <div className="candy-cane-wrap"><div className="candy-cane-inner">{children}</div></div>
);

export const ColorfulFrameCard = ({ title, children }) => (
  <div className="colorful-frame-wrap">
    <div className="colorful-frame-inner">
      {title && <h3 className="frame-title">{title}</h3>}
      {children}
    </div>
  </div>
);
