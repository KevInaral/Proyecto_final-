import React from 'react';
import { createRoot } from 'react-dom/client'; // Cambiar la importación aquí
import App from './App.jsx';
import './index.css';
import axios from 'axios';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let token = localStorage.getItem('token');

if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
} else {
  delete axios.defaults.headers.common['Authorization'];
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
