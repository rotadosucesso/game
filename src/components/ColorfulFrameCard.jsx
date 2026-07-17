import React from 'react';
import './ColorfulFrameCard.css';

const ColorfulFrameCard = ({ title, children, className = '' }) => {
  return (
    <div className={`colorful-frame-wrapper ${className}`}>
      <div className="colorful-frame-inner">
        {/* Renderiza o título condicionalmente, se ele for passado */}
        {title && <h3 className="colorful-frame-title">{title}</h3>}
        
        <div className="colorful-frame-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ColorfulFrameCard;
