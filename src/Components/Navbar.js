import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinkStyle = "hover:text-[#38bdf8] transition duration-300";

  return (
    <header className="bg-[#0d1425] fixed w-full z-50 text-white shadow-md">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <HashLink
            to="/#home"
            onClick={closeMenu}
            className="hover:text-[#38bdf8] transition-colors duration-300"
          >
            <span className="text-[#38bdf8]">Indu</span>lekha
          </HashLink>
        </div>

        {/* Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-base">
          <li><HashLink to="/#home" smooth className={navLinkStyle}>Home</HashLink></li>
          <li><HashLink to="/#about" smooth className={navLinkStyle}>About</HashLink></li>
          <li><Link to="/skills" className={navLinkStyle}>Skills</Link></li>
          <li><Link to="/projects" className={navLinkStyle}>Projects</Link></li>
          <li>
            <a href="/resume.pdf" download className={navLinkStyle}>Resume</a>
          </li>
        </ul>

        {/* Mobile Links */}
        {menuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-[#0d1425] flex flex-col items-center gap-4 py-4 md:hidden text-lg border-t border-[#1e293b]">
            <li><HashLink to="/#home" smooth onClick={closeMenu} className={navLinkStyle}>Home</HashLink></li>
            <li><HashLink to="/#about" smooth onClick={closeMenu} className={navLinkStyle}>About</HashLink></li>
            <li><Link to="/skills" onClick={closeMenu} className={navLinkStyle}>Skills</Link></li>
            <li><Link to="/projects" onClick={closeMenu} className={navLinkStyle}>Projects</Link></li>
            <li>
              <a href="/resume.pdf" download onClick={closeMenu} className={navLinkStyle}>Resume</a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
