import React from 'react';
import './CandyCaneCard.css';

const CandyCaneCard = ({ children, className = '' }) => {
  return (
    <div className={`candy-cane-wrapper ${className}`}>
      <div className="candy-cane-inner">
        {children}
      </div>
    </div>
  );
};

export default CandyCaneCard;
