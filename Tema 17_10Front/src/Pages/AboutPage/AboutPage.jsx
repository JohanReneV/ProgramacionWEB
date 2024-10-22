import React from 'react';
import './About.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>Acerca de esta Aplicación</h1>
      <p>
        Esta aplicación permite explorar los personajes de la popular serie
        animada "Rick and Morty". Los usuarios pueden filtrar personajes entre
        humanos y alienígenas, así como buscar personajes específicos por nombre.
      </p>

      <h2>Instrucciones de Uso</h2>
      <p>
        Para buscar un personaje, utiliza el campo de búsqueda en la página
        principal. Puedes navegar entre las secciones de personajes, ver
        detalles y explorar el universo de "Rick and Morty".
      </p>

      <h2>Tecnologías Utilizadas</h2>
      <ul>
        <li>React</li>
        <li>Vite</li>
        <li>API de Rick and Morty</li>
        <li>Material UI</li>
        <li>CSS Flexbox para diseño responsivo</li>
      </ul>

      <h2>Agradecimientos</h2>
      <p>
        Gracias a la API de Rick and Morty por proporcionar datos
        interesantes para esta aplicación.
      </p>

      <h2>Contacto</h2>
      <p>
        Para sugerencias o comentarios, por favor envía un correo a
        <a href="jh.ver@udla.edu.co"> jh.vera@udla.edu.co</a> o
        visita mis redes sociales.
      </p>
    </div>
  );
};

export default AboutPage;
