// src/components/Dashboard.tsx
import React from 'react';
import './Dashboard.css';
import logo from '../images/logo.png'; // Ruta correcta a la imagen

interface DashboardProps {
  currentUser: string | null;
  onNavigate: (section: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ currentUser, onNavigate }) => {
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
          <span onClick={() => onNavigate('profile')}>Perfil</span>
        </div>
        <div className="option">
          <i className="icon database"></i>
          <span onClick={() => onNavigate('datos')}>Ver datos</span>
        </div>
        <div className="option">
          <i className="icon bracelet"></i>
          <span onClick={() => onNavigate('pulsera')}>Pulsera</span>
        </div>
        <div className="option">
          <i className="icon password"></i>
          <span>Contraseñas</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
