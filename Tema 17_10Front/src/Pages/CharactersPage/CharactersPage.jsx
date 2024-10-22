import React, { useState, useEffect } from 'react';
import './character.css';


const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Función para obtener los personajes
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <div className="character-container">
        {characters.map((character) => (
          <div key={character.id} className="character-card">
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );

};

export default CharactersPage;
