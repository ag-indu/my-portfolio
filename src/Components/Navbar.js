import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  return (
    <header className='Navbar'>
      <nav className='navbar-container'>
        <ul className='nav-links'>
          <li><HashLink to='/#home' smooth={true}>Home</HashLink></li>
          <li><HashLink to='/#about' smooth={true} duration={500}>About</HashLink></li>
          <li><Link to='/skills'>Skills</Link></li>
          <li><Link to='/projects' >Projects</Link></li>
          <li>Resume</li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
