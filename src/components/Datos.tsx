import React from 'react';
import './Datos.css';
import backIcon from '../images/back-icon.png'; // Icono para volver

// Asumiendo que tenemos estos archivos en las carpetas respectivas
import img1 from '../imagesTest/img1.png';
import img2 from '../imagesTest/img2.png';
import img3 from '../imagesTest/img5.png';
import doc1 from '../docTest/doc1.pdf';
import doc2 from '../docTest/doc2.pdf';
import doc3 from '../docTest/doc3.pdf';

interface DatosProps {
  onNavigate: (section: string) => void; // Prop para navegación
}

const Datos: React.FC<DatosProps> = ({ onNavigate }) => {
  return (
    <div className="datos-container">
      <div className="header">
        <img src={backIcon} alt="back" onClick={() => onNavigate('dashboard')}/>
        <h2>Ver Datos</h2>
      </div>
      <div className="section">
        <h3>Cuentas</h3>
        <div className="cuentas">
          <div className="cuenta">Banco Bolivariano</div>
          <div className="cuenta">Facebook</div>
          <div className="cuenta">Atlassian Jira</div>
        </div>
      </div>
      <div className="section">
        <h3>Fotos y Videos</h3>
        <div className="imagenes">
          <img src={img1} alt="img1" />
          <img src={img2} alt="img2" />
          <img src={img3} alt="img3" />
        </div>
      </div>
      <div className="section">
        <h3>Documentos</h3>
        <div className="documentos">
          <a href={doc1} download>Document 1</a>
          <a href={doc2} download>Document 2</a>
          <a href={doc3} download>Document 3</a>
        </div>
      </div>
    </div>
  );
};

export default Datos;
