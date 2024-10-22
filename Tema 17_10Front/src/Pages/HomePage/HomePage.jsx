import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './Home.css';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setFilteredCharacters(data.results);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    
    const filtered = characters.filter(character => 
      character.name.toLowerCase().includes(value)
    );
    
    setFilteredCharacters(filtered);
  };

  return (
    <div className="home-page">
      <h1>Bienvenido a la App de Rick and Morty</h1>
      <p>Explora los personajes de una de las series más divertidas y surrealistas. Filtra entre humanos y aliens, o busca por nombre.</p>

      {}
      <input 
        type="text" 
        placeholder="Buscar personaje..." 
        value={searchTerm} 
        onChange={handleSearch} 
        style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
      />

      <h2>Personajes:</h2>
      <ul className="character-list">
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map(character => (
            <li key={character.id} className="character-item">
              <img 
                src={character.image} 
                alt={character.name} 
                className="character-image" 
              />
              <div className="character-details">
                <strong>{character.name}</strong> - {character.species}
              </div>
            </li>
          ))
        ) : (
          <li>No se encontraron personajes</li>
        )}
      </ul>

      <div className="buttons">
        <Link to="/humans">
          <Button variant="contained" color="primary" style={{ margin: '10px' }}>Ver Humanos</Button>
        </Link>
        <Link to="/aliens">
          <Button variant="contained" color="secondary" style={{ margin: '10px' }}>Ver Aliens</Button>
        </Link>
      </div>

      <blockquote>"Wubba Lubba Dub Dub!" - Rick Sanchez</blockquote>
    </div>
  );
};

export default HomePage;
