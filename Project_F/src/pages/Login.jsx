import React, { useState } from 'react';
import axios from 'axios'; // Asumiendo que has instalado axios
import { useNavigate, Link } from 'react-router-dom'; // Importa Link de react-router-dom
import './estilos/login.css'; // Importar estilos CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Define el estado para manejar errores
  const navigate = useNavigate();  // Llama a la función useNavigate

  const enviar = (event) => {
    event.preventDefault();
    axios.post('/login', { email, password })  // Asegúrate de que esta URL es correcta y está configurada en tu backend
      .then(response => {
        console.log('Login successful', response);
        const token = response.data.token; // Asegúrate de que esto coincida con la estructura de tu respuesta
        localStorage.setItem('token', token);
        navigate('/foro');  // Redirige al usuario a /foro
      })
      .catch(error => {
        console.error('There was an error logging in!', error);
        setError('There was an error logging in!'); // Establece el mensaje de error
      });
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Iniciar Sesión</h2>
        {error && <div className="error-message">{error}</div>}  {/* Renderiza el mensaje de error si existe */}
        <form onSubmit={enviar}>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Iniciar Sesión</button>
        </form>
        <div className="register-link">
          ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>  {/* Usa el componente Link para la navegación */}
        </div>
      </div>
    </div>
  );
};

export default Login;
