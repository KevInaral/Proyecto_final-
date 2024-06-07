import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../estilos/clima.css';

const Clima = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = '4f3e63fb96e9c8e0c046c1dd8d3ea653';

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Oaxaca,mx&units=metric&appid=${apiKey}`);
        setWeather(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeather();
  }, [apiKey]);

  if (loading) {
    return <p className="clima-loading">Cargando el clima...</p>;
  }

  if (error) {
    return <p className="clima-error">Error al cargar el clima: {error}</p>;
  }

  return (
    <div className="clima-container">
      <h1 className="clima-title">Clima en Oaxaca</h1>
      {weather && (
        <div>
          <p className="clima-temp">{weather.main.temp}°C</p>
          <p className="clima-description">{weather.weather[0].description}</p>
          <div className="clima-details">
            <div>
              <p>Humedad: {weather.main.humidity}%</p>
              <p>Viento: {weather.wind.speed} m/s</p>
            </div>
            <div>
             
            <p>Presión: {weather.main.pressure} mbar</p>
              <p>Visibilidad: {weather.visibility / 1000} km</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clima;
