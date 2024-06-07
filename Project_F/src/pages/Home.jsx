import React from 'react';
import '../estilos/Home.css'; // Asegúrate de que la ruta sea correcta
import waterImage from '../img/W.jpg'; // Importa la imagen
import additionalImage1 from '../img/M.jpeg'; // Importa la imagen adicional 1
import additionalImage2 from '../img/SEQUIA2.jpg'; // Importa la imagen adicional 2

const Home = () => {
  return (
    <div className="home-container">
      <h1>¿Que se puede hacer salvo ver sequía?</h1>
      <p>Bienvenidos a nuestro blog donde abordaremos el tema de la escasez de agua en la ciudad de Oaxaca, 
        producto de la gentrificación y el mal manejo de los gobernantes. La crisis se refleja en la presa Presidente Benito Juárez del Istmo de Tehuantepec, la zona más estrecha de México, donde el embalse está a cerca de un tercio de su capacidad de 300,000 metros cúbicos 
        en el municipio de Jalapa del Marqués, a 210 kilómetros de la capital oaxaqueña.</p>
      
      <div className="image-container">
        <img src={waterImage} alt="Water crisis in Oaxaca" className="home-image" />
        <p className="image-text">Fotograma capturado por K:L.</p>
      </div>
      
      <h2>Un panorama de emergencia hídrica en Oaxaca</h2>
      <p>Este panorama muestra la emergencia hídrica que vive Oaxaca, el tercer estado en México con mayor población en pobreza (58.4%), según el Consejo Nacional de Evaluación de la Política de Desarrollo Social (Conveal), y donde una situación así se ha repetido en 2017 y 2019. Este marzo, dos terceras partes (66.6%) del estado, conocido por su producción de café, maíz y chocolate, afrontan una sequía que va de “moderada” a “extrema”, según el Monitor de Sequía de la Conagua.</p>
      
      <div className="home-container2">
        <h2>La Grasa de las capitales</h2>
        <p>La sequía azota a Oaxaca, donde al comenzar la primavera y la etapa más crítica del estiaje algunas de sus mayores presas están por debajo del 50% de su capacidad, 
            lo que amenaza al sector turístico y la agricultura en una de las regiones más pobres del país. Gregorio López, un hombre de 76 años de edad, aún recuerda el sitio donde 
            estaba su casa en Jalapa el Viejo, cuyos restos emergieron en la presa a principios de este 2024 por la sequía, falta de lluvias y escasas cosechas.</p>
        
        <div className="imagen-adicional">
          <img src={additionalImage1} alt="Descripción de la imagen 1" className="additional-image" />
          <div className="additional-text">
            <h2>Sin maíz no hay país</h2>
            <p>Con su sombrero y su machete, José, originario de Juchitán, ha cosechado maíz toda su vida, lo heredó de su padre.
             Este año, las pérdidas que registró son de más de 12 mil pesos que invirtió para su siembra.
             “En esta parcela hacemos milpa, en medio de la cosecha del maíz, hay calabaza, melón, frijoles, y eso enriquece a la tierra, le da fortaleza, 
             pero este año no hubo nada; las calabazas crecieron muy pequeñas, y de frijol no hubo nada”.</p>
             
             <h2>El desierto del alma</h2>

             <p>La sequía azota a Oaxaca, donde al comenzar la primavera y la etapa más crítica del estiaje algunas de sus mayores presas están por debajo del 50% de su capacidad, 
            lo que amenaza al sector turístico y la agricultura en una de las regiones más pobres del país. Gregorio López, un hombre de 76 años de edad, aún recuerda el sitio donde 
            estaba su casa en Jalapa el Viejo, cuyos restos emergieron en la presa a principios de este 2024 por la sequía, falta de lluvias y escasas cosechas.</p>
          
          </div>
        </div>
        <img src={additionalImage2} alt="Descripción de la imagen 2" className="additional-image" />
      </div>
    </div>
  );
};

export default Home;
