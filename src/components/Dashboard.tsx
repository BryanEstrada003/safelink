// src/components/Dashboard.tsx
import React from 'react';
import './Dashboard.css';
import logo from '../images/logo.png'; // Ruta correcta a la imagen


interface DashboardProps {
  currentUser: string | null;
}

const Dashboard: React.FC<DashboardProps> = ({ currentUser }) => {
  return (
    <div className="dashboard-container">
      <center>
        <img src={logo} alt="logo" />
        <h1>SafeLink</h1>
      </center>
      <h1>Welcome, {currentUser}</h1>
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
    </div>
  );
};

export default Dashboard;
