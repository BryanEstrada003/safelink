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
      <br />
      <center>
        <img src={logo} alt="logo" />
        <h1>SafeLink</h1>
      </center>
      <h1>Welcome, {currentUser}</h1>
      <br />
      <br />
      <div className="dashboard">
        <div className="option" onClick={() => onNavigate('profile')}>
          <i className="icon user"></i>
          <span>Perfil</span>
        </div>
        <div className="option" onClick={() => onNavigate('viewData')}>
          <i className="icon database"></i>
          <span>Ver datos</span>
        </div>
        <div className="option" onClick={() => onNavigate('bracelet')}>
          <i className="icon bracelet"></i>
          <span>Pulsera</span>
        </div>
        <div className="option" onClick={() => onNavigate('password')}>
          <i className="icon password"></i>
          <span>Contraseñas</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
