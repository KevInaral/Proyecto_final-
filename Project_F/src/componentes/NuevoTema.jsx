// src/componentes/NuevoTema.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../estilos/nuevoTema.css';

const NuevoTema = () => {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/temas', { titulo, contenido });
      // Redirigir al foro principal después de crear el tema
      window.location.href = '/foro';
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="nuevo-tema-container">
      <h1 className="nuevo-tema-title">Crear Nuevo Tema</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Contenido</label>
          <textarea
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Crear Tema</button>
      </form>
    </div>
  );
};

export default NuevoTema;
