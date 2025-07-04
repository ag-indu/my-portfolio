import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <header className='Navbar'>
      <nav className='navbar-container'>
        <ul className='nav-links'>
          <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
          <li><Link to='about' smooth={true} duration={500}>About</Link></li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Resume</li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
