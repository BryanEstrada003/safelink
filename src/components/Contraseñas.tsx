import React, { useState } from 'react';
import './Contraseñas.css';
import backIcon from '../images/back-icon.png';

interface ContraseñasProps {
  currentUser: { email: string; password: string; user: string };
  onNavigate: (section: string) => void;
  onUpdateFakePassword: (newFakePassword: string) => void;
}

const Contraseñas: React.FC<ContraseñasProps> = ({ currentUser, onNavigate, onUpdateFakePassword }) => {
  const [fakePassword, setFakePassword] = useState('');
  const [confirmMessage, setConfirmMessage] = useState('');

  const handleSave = () => {
    if (fakePassword === currentUser.password) {
      setConfirmMessage('La contraseña falsa debe ser diferente a la actual.');
    } else {
      onUpdateFakePassword(fakePassword);
      setConfirmMessage('Contraseña falsa establecida correctamente.');
    }
  };

  return (
    <div className="contraseñas-container">
      <div className="header">
        <img src={backIcon} alt="back" onClick={() => onNavigate('dashboard')} />
        <h2>Contraseñas</h2>
      </div>
      <div className="content">
        <input
          type="password"
          placeholder="Introduce la contraseña falsa"
          value={fakePassword}
          onChange={(e) => setFakePassword(e.target.value)}
        />
        <button onClick={handleSave}>Guardar Contraseña Falsa</button>
        {confirmMessage && <p>{confirmMessage}</p>}
      </div>
    </div>
  );
};

export default Contraseñas;
