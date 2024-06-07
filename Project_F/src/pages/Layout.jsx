import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../estilos/menu.css';

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Falta de agua en tu colonia?</Link></li>
          <li><Link to="/articles">Articulos</Link></li>
          <li><Link to="/contact">Contactanos</Link></li>
          <li><Link to="/registro">Registrarse</Link></li>
          <li><Link to="/clima">Clima en Oaxaca</Link></li>
          <li><Link to="/foro">Foro</Link></li> {/* Enlace al foro */}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
