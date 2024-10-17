import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './Components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage/HomePage'
import AboutPage from './Pages/AboutPage/AboutPage'
import CharactersPage from './Pages/CharactersPage/CharactersPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Router>
        <Header></Header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Router>

      </div>
    </>
  )
}

export default App
