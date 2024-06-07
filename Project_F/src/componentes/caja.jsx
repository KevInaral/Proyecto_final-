import React from "react";
import '../estilos/caja.css';
import imagen1 from '../img/art1.jpeg'; 
import imagen2 from '../img/art3.webp'; 
import imagen3 from '../img/art2.jpg'; 

const imageMap = {
  'art1.jpeg': imagen1,
  'art3.webp': imagen2,
  'art2.jpg': imagen3,
};

function Cajas(props) {
  return (
    <div className='contenedorTexto'>
      <img className='contenedorImagen' src={imageMap[props.Imagen]} alt={props.altImagen} />
      <h2 className='contenedorTitulo'>{props.Titulo}</h2>
      <p className='contenedorParrafo'>{props.Texto}</p>
      <h3 className='contenedorTitulo3'>{props.Titulo3}</h3>
      <p className='parrafoAño'>{props.Año}</p>
      <h3 className='contenedorTitulo2'>{props.Titulo2}</h3>
      <p className='parrafoGenero'>{props.Genero}</p>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <button className='botonInfo'>Mas info...</button>
      </a>
    </div>
  );
}

export default Cajas;
