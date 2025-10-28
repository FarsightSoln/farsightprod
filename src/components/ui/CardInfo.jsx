
// src/components/ui/CardInfo.jsx
import React from 'react';
import './_card.scss';

const CardInfo = ({ icon, title, description }) => {
  return (
    <div className="info-card">
      <div className="card-icon">
        <i className={icon}></i>
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default CardInfo;