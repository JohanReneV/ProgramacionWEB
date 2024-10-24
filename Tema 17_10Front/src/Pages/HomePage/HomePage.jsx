import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import './Home.css';

const HomePage = () => {
  const [nameSearchTerm, setNameSearchTerm] = useState('');
  const [idSearchTerm, setIdSearchTerm] = useState('');
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setFilteredCharacters(data.results);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  const handleNameSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setNameSearchTerm(value);

    const filtered = characters.filter(character =>
      character.name.toLowerCase().includes(value)
    );

    setFilteredCharacters(filtered);
  };

  const handleIdSearch = (event) => {
    const value = event.target.value;
    setIdSearchTerm(value);

    if (value === '') {
      setFilteredCharacters(characters);
    } else {
      const filtered = characters.filter(character =>
        character.id === parseInt(value, 10)
      );
      setFilteredCharacters(filtered);
    }
  };

  if (loading) {
    return <div className="loading"><CircularProgress /></div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="home-page">
      <h1>Bienvenido a la App de Rick and Morty</h1>
      <p>Explora los personajes de una de las series más divertidas y surrealistas. Filtra por nombre o por ID.</p>

      <input 
        type="text" 
        placeholder="Buscar personaje por nombre..." 
        value={nameSearchTerm} 
        onChange={handleNameSearch} 
        style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
      />

      <input 
        type="text" 
        placeholder="Buscar personaje por ID..." 
        value={idSearchTerm} 
        onChange={handleIdSearch} 
        style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
      />

      <h2>Personajes:</h2>

      {filteredCharacters.length > 0 ? (
        <ul className="character-list">
          {filteredCharacters.map(character => (
            <li key={character.id} className="character-item">
              <Link to={`/character/${character.id}`}>
                <img 
                  src={character.image} 
                  alt={character.name} 
                  className="character-image" 
                />
                <div className="character-details">
                  <strong>{character.name}</strong> - {character.species}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron personajes</p>
      )}

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
