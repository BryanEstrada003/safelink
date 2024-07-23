import React, { useState } from 'react';

interface ProfileProps {
  user: {
    email: string;
    user: string;
  };
  onUpdatePassword: (newPassword: string) => void;
  onNavigate: (section: string) => void; // Nueva prop para navegar
}

const Profile: React.FC<ProfileProps> = ({ user, onUpdatePassword, onNavigate }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    setError('');
    onUpdatePassword(newPassword);
  };

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Usuario:</strong> {user.user}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="newPassword">Nueva Contraseña:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirmar Nueva Contraseña:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Actualizar Contraseña</button>
      </form>
      <button onClick={() => onNavigate('dashboard')}>Volver al Dashboard</button>
    </div>
  );
};

export default Profile;
