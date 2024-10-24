import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import './CharacterList.css';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
        setCharacters(response.data.results);
        setTotalPages(response.data.info.pages); // Total de páginas
        setLoading(false);
      } catch (error) {
        setError('Error fetching character data');
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  if (loading) {
    return <div className="loading"><CircularProgress /></div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="character-list">
      <h1>Personajes</h1>
      <div className="characters">
        {characters.map(character => (
          <div key={character.id} className="character-card">
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={page === 1}>Anterior</button>
        <span>Página {page} de {totalPages}</span>
        <button onClick={handleNextPage} disabled={page === totalPages}>Siguiente</button>
      </div>
    </div>
  );
};

export default CharacterList;
