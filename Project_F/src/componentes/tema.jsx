// src/componentes/Tema.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../estilos/tema.css';

const Tema = () => {
  const { id } = useParams();
  const [tema, setTema] = useState(null);

  useEffect(() => {
    // Aquí deberías hacer una petición a tu API para obtener el tema y sus respuestas
    const fetchTema = async () => {
      try {
        const response = await axios.get(`/api/temas/${id}`);
        setTema(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTema();
  }, [id]);

  if (!tema) {
    return <p>Cargando el tema...</p>;
  }

  return (
    <div className="tema-container">
      <h1 className="tema-title">{tema.titulo}</h1>
      <p className="tema-contenido">{tema.contenido}</p>
      <div className="respuestas">
        {tema.respuestas.map((respuesta) => (
          <div key={respuesta.id} className="respuesta">
            <p>{respuesta.contenido}</p>
            <p className="respuesta-autor">Por {respuesta.autor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tema;
