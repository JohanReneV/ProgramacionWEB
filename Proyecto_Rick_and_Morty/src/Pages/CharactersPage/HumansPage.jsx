import React, { useState, useEffect } from 'react';

const HumansPage = () => {
  const [humans, setHumans] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character/?species=Human');
        const data = await response.json();
        setHumans(data.results);
      } catch (error) {
        console.error('Error fetching human characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Human Characters</h1>
      <div className="character-container">
        {humans.map((character) => (
          <div key={character.id} className="character-card">
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HumansPage;
