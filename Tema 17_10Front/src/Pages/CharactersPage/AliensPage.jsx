import React, { useState, useEffect } from 'react';

const AliensPage = () => {
  const [aliens, setAliens] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character/?species=Alien');
        const data = await response.json();
        setAliens(data.results);
      } catch (error) {
        console.error('Error fetching alien characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Alien Characters</h1>
      <div className="character-container">
        {aliens.map((character) => (
          <div key={character.id} className="character-card">
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AliensPage;
