import { useState } from 'react'
import './App.css'

//Import Components
import Header from './Components/Header/Header'


const App=()=> {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <p>Hola Mundo</p>
      <p>Hola Mundo</p>
    </>
  )
}

export default App
