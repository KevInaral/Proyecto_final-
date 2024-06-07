import React from 'react';
import Cajas from '../componentes/caja'; // Asegúrate de ajustar la ruta según la ubicación de tu componente Cajas

const articles = [
  {
    id: 1,
    title: 'Las relaciones entre tenencia de la tierra y el cambio climático',
    excerpt: 'An overview of the water shortage issues in Oaxaca...',
    imagen: 'art1.jpeg',
    altImagen: 'Descripción de la imagen 1',
    texto: 'Este artículo muestra la correlación que hay entre la infertilidad de la tierra y la sequía provocada por el cambio climático',
    titulo2: 'Género',
    genero: 'Científico',
    año: 'Año de publicación: Marzo 2024',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S0264837724001224'
  },
  {
    id: 2,
    title: 'Impactos ambientales del nexo agua, alimentos y energía en la Ciudad de México',
    excerpt: 'How the water crisis...',
    imagen: 'art3.webp',
    altImagen: 'Descripción de la imagen 2',
    texto: 'Este artículo muestra la forma en la que los sistemas de alcantarillado pueden afectar la alimentación y costes energéticos en la ciudad de México',
    titulo2: 'Género',
    genero: 'Científico',
    año: 'Enero 2024',
    link: 'https://www.sciencedirect.com/science/article/pii/S2590252024000035'
  },
  {
    id: 3,
    title: 'La eficiencia en la gestión del sistema de agua en México',
    excerpt: 'How the water crisis affects local communities in Oaxaca...',
    imagen: 'art2.jpg',
    altImagen: 'Descripción de la imagen 3',
    texto: 'Este artículo busca informar al lector sobre el sistema que gestiona el agua en México, resaltando puntos como la recolección de agua de lluvia y el alcantarillado',
    titulo2: 'Género',
    genero: 'Científico',
    año: 'Mayo 2024',
    link: 'https://www.sciencedirect.com/science/article/pii/S2212371722000336'
  },
];

const Articles = () => {
  return (
    <div>
      <h1>Artículos</h1>
      <div className="contenedorCajas">
        {articles.map(article => (
          <Cajas
            key={article.id}
            id={article.id}
            Titulo={article.title}
            Imagen={article.imagen}
            altImagen={article.altImagen}
            Texto={article.texto}
            Titulo2={article.titulo2}
            Genero={article.genero}
            Año={article.año}
            link={article.link}  // Pasa el enlace del artículo
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;
