import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0d1425] text-white py-6 px-4 mt-10 relative z-10">
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between text-center gap-3 relative">

        {/* Left */}
        <div className="text-sm sm:text-base sm:text-left w-full sm:w-auto">
          Designed by <span className="text-sky-400 font-semibold">Indulekha A G</span>
        </div>

        {/* Center */}
        <div className="text-sm sm:text-base w-full sm:w-auto order-1 sm:order-none">
          &copy; {year}
        </div>

        {/* Right */}
        <div className="flex gap-4 text-xl justify-center sm:justify-end w-full sm:w-auto">
          <a
            href="https://github.com/ag-indu"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400 transition"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/indulekha-a-g-955920222/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400 transition"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
