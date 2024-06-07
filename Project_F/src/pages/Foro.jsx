import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../estilos/foro.css';

const Foro = () => {
  const [temas, setTemas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTemas = async () => {
      try {
        const response = await axios.get('http://localhost:3001/temas');
        console.log('Respuesta de la API:', response.data);
        if (Array.isArray(response.data)) {
          setTemas(response.data);
        } else {
          console.error('Datos de API no son una matriz:', response.data);
          throw new Error('Datos de API no son una matriz');
        }
        setLoading(false);
      } catch (err) {
        console.error('Error al obtener temas:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTemas();
  }, []);

  console.log('Estado temas:', temas);
  console.log('Tipo de datos de temas:', typeof temas);

  if (loading) {
    return <p>Cargando temas...</p>;
  }

  if (error) {
    return <p>Error al cargar temas: {error}</p>;
  }

  if (!Array.isArray(temas)) {
    return <p>Los datos obtenidos no son una lista válida.</p>;
  }

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
