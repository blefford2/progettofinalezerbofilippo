import React from 'react'
import logo from "../immagini/pngwing.com.png"
import './Header.css'

const Header = () => {
  return (
    <header className= 'header'>
    <img src={logo} alt="Logo" className='logo' />
    <nav>
        <ul>
            <li>Midnight Club Garage</li>
        </ul>
    </nav>
    </header>
  )
}

export default Header