import React, { useState } from 'react';
import axios from 'axios';
import '../estilos/quiz.css';

const Quiz = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    codigoPostal: '',
    llegaAgua: '',
    compraPipas: '',
    tieneCisterna: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/cuestionarios', {
        nombre_us: formData.nombre,
        direccion: formData.direccion,
        codigopostal: formData.codigoPostal,
        llegaAgua: formData.llegaAgua,
        comprarPipas: formData.compraPipas,
        cisterna: formData.tieneCisterna === 'si'
      });
      setMessage('Cuestionario enviado con éxito');
      console.log('Datos del cuestionario enviados:', response.data);
    } catch (error) {
      setMessage('Hubo un error al enviar el cuestionario');
      console.error('Error al enviar los datos del cuestionario:', error);
    }
  };

  return (
    <div className="quiz-container">
      <h2>Cuestionario</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="direccion">Dirección:</label>
          <input type="text" id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="codigoPostal">Código Postal:</label>
          <input type="text" id="codigoPostal" name="codigoPostal" value={formData.codigoPostal} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="llegaAgua">¿Llega agua a tu colonia?</label>
          <select id="llegaAgua" name="llegaAgua" value={formData.llegaAgua} onChange={handleChange} required>
            <option value="">Selecciona una opción</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="compraPipas">¿Has tenido que comprar pipas de agua?</label>
          <select id="compraPipas" name="compraPipas" value={formData.compraPipas} onChange={handleChange} required>
            <option value="">Selecciona una opción</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="tieneCisterna">¿Cuentas con cisterna de agua?</label>
          <select id="tieneCisterna" name="tieneCisterna" value={formData.tieneCisterna} onChange={handleChange} required>
            <option value="">Selecciona una opción</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
        <button type="submit" className="btn-submit">Enviar</button>
      </form>
    </div>
  );
};

export default Quiz;
