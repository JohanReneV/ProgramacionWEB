import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import './CharacterDetails.css';

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        setCharacter(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching character data');
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return <div className="loading"><CircularProgress /></div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!character) {
    return <div>No se encontraron detalles del personaje.</div>;
  }

  return (
    <div className="character-details-page">
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} className="character-image" />
      <p><strong>Especie:</strong> {character.species}</p>
      <p><strong>Género:</strong> {character.gender}</p>
      <p><strong>Estado:</strong> {character.status}</p>
      <p><strong>Origen:</strong> {character.origin.name}</p>
      <p><strong>Ubicación actual:</strong> {character.location.name}</p>
    </div>
  );
};

export default CharacterDetails;
