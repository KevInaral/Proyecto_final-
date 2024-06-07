// src/componentes/Foro.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../estilos/foro.css';

const Foro = () => {
  const [temas, setTemas] = useState([]);

  useEffect(() => {
    // Aquí deberías hacer una petición a tu API para obtener los temas del foro
    const fetchTemas = async () => {
      try {
        const response = await axios.get('/api/temas');
        setTemas(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTemas();
  }, []);

  return (
    <div className="foro-container">
      <h1 className="foro-title">Foro de Discusiones</h1>
      <Link to="/foro/nuevo" className="nuevo-tema-button">Nuevo Tema</Link>
      <ul className="lista-temas">
        {temas.map((tema) => (
          <li key={tema.id} className="tema-item">
            <Link to={`/foro/tema/${tema.id}`}>{tema.titulo}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Foro;
