import React from 'react'
import './Header'
import './Header.css'

import NavBar from '../NavBar/NavBar'

const Header = () => {
  return (
      <header>
        <img id="image-movie" src="https://th.bing.com/th/id/OIP.wqKERn6qXPbYjMIk651FyQHaJ4?rs=1&pid=ImgDetMain" alt="Rick Sanchez" />
        <h1>Rick Sanchez</h1>
        <p>Movie App</p>
        <NavBar />
      </header>
  )
}

export default Header
