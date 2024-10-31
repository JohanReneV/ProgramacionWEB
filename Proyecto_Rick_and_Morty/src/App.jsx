import { useState } from 'react';
import './App.css';

import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import CharactersPage from './Pages/CharactersPage/CharactersPage';
import HumansPage from './Pages/CharactersPage/HumansPage';
import AliensPage from './Pages/CharactersPage/AliensPage';
import CharacterDetails from './Pages/CharactersPage/CharacterDetails';

function App() {
  return (
    <>
      <div className='App'>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/humans" element={<HumansPage />} />
            <Route path="/aliens" element={<AliensPage />} />
            <Route path="/character/:id" element={<CharacterDetails />} /> 
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
