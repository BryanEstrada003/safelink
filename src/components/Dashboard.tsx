import React, { useEffect } from 'react';
import './Dashboard.css';
import logo from '../images/logo.png'; // Ruta correcta a la imagen

interface DashboardProps {
  currentUser: string | null;
  onNavigate: (section: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ currentUser, onNavigate }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      alert('¡Te estás alejando de tu dispositivo a 3 metros!');
    }, 5000); // La alerta aparecerá después de 5 segundos (puedes ajustar este tiempo)

    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar el componente
  }, []);

  return (
    <div className="dashboard-container">
      <center>
        <img src={logo} alt="logo" />
        <h1>SafeLink</h1>
      </center>
      <h1>Welcome, {currentUser}</h1>
      <div className="dashboard">
        <div className="option" onClick={() => onNavigate('profile')}>
          <i className="icon user"></i>
          <span>Perfil</span>
        </div>
        <div className="option" onClick={() => onNavigate('datos')}>
          <i className="icon database"></i>
          <span>Ver datos</span>
        </div>
        <div className="option" onClick={() => onNavigate('pulsera')}>
          <i className="icon bracelet"></i>
          <span>Pulsera</span>
        </div>
        <div className="option" onClick={() => onNavigate('contraseñas')}>
          <i className="icon password"></i>
          <span>Contraseñas</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
