import React, { useState, useEffect } from 'react';
import './Pulsera.css';
import backIcon from '../images/back-icon.png';
import searchingBracelet from '../images/searching-bracelet.png';
import connectedBracelet from '../images/connected-bracelet.png';

interface PulseraProps {
  onNavigate: (section: string) => void;
}

const Pulsera: React.FC<PulseraProps> = ({ onNavigate }) => {
  const [isConnecting, setIsConnecting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsConnecting(false);
    }, Math.floor(Math.random() * (15000 - 10000 + 1)) + 10000); // Random time between 10 and 15 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className="pulsera-container">
      <div className="header">
        <img src={backIcon} alt="back" onClick={() => onNavigate('dashboard')} />
        <h2>Pulsera</h2>
      </div>
      <div className="content">
        <img src={isConnecting ? searchingBracelet : connectedBracelet} alt="bracelet status" />
        <h3>{isConnecting ? 'Buscando conexión' : 'Conexión encontrada'}</h3>
      </div>
    </div>
  );
};

export default Pulsera;
