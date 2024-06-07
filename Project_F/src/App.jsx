import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import Article from "./pages/Article";
import Login from './pages/Login';
import Registro from './pages/Registro_Conexion';
import Clima from './componentes/clima'; // Asegúrate de usar 'Clima' con mayúscula
import Foro from './componentes/Foro'; // Importa Foro.jsx
import Tema from './componentes/tema'; // Importa Tema.jsx
import NuevoTema from './componentes/NuevoTema'; // Importa NuevoTema.jsx

import './estilos/menu.css';
import './estilos/login.css';
import './estilos/clima.css';
import './estilos/foro.css'; // Asegúrate de importar los estilos necesarios
import './estilos/nuevoTema.css';
import './estilos/tema.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles/:id" element={<Article />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="registro" element={<Registro />} />
          <Route path="clima" element={<Clima />} />
          <Route path="foro" element={<Foro />} />
          <Route path="foro/tema/:id" element={<Tema />} />
          <Route path="foro/nuevo" element={<NuevoTema />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
