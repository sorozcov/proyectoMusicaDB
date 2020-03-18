import React, { Fragment } from 'react';

import './styles.css';
import logo from '../../../public/Images/music-note.png';
import Artistas from '../../../public/Images/Artistas.png';
import Canciones from '../../../public/Images/Canciones.png';
import Albumes from '../../../public/Images/Álbumes.png';
import Reportes from '../../../public/Images/Reportes.png';

const sidebarOptions = ['Canciones', 'Artistas', 'Álbumes', 'Reportes'];
const optImg = [Canciones, Artistas, Albumes, Reportes];

export const Main = () => {
  return (
    <Fragment>
    <div className="sidebar">
      <div className="sidebar-title">
        <img alt="logo" src={logo} className="sidebar-title-image"/>
        {'Music App'}
      </div>
      <div className="sidebar-options">
        {sidebarOptions.map((option, id) => (
          <div key={id} value={id} className="sidebar-option">
            <img alt="img" src={optImg[id]} className="sidebar-image"/>
            {option}
          </div>
        ))}
      </div>
    </div>
    <div className="header">

    </div>
    </Fragment>
  );
} 
