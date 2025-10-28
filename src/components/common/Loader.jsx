// src/components/common/Loader.jsx
import React from 'react';
import '../../assets/scss/components/_loader.scss';

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;