// src/components/Dashboard.tsx
import React from 'react';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <div className="option">
        <i className="icon user"></i>
        <span>Perfil</span>
      </div>
      <div className="option">
        <i className="icon database"></i>
        <span>Ver datos</span>
      </div>
      <div className="option">
        <i className="icon bracelet"></i>
        <span>Pulsera</span>
      </div>
      <div className="option">
        <i className="icon password"></i>
        <span>Contraseñas</span>
      </div>
      <div className="option">
        <i className="icon tutorial"></i>
        <span>Tutorial</span>
      </div>
      <div className="option">
        <i className="icon settings"></i>
        <span>Opciones</span>
      </div>
    </div>
  );
};

export default Dashboard;
