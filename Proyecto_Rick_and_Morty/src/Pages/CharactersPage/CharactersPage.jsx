import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './character.css';

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
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
            <Link to={`/character/${character.id}`}>
              <img src={character.image} alt={character.name} />
              <h3>{character.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharactersPage;
