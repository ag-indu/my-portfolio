import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className='footer'>
       <div className='foo-left'>
         <p>Designed and developed by Indulekha A G</p>
       </div>
       <div className="foo-middle">
         <p>Copyright &copy; {year}</p>
       </div>
       <div className="foo-right">
         <a href="https://github.com/ag-indu"><FontAwesomeIcon icon={faGithub} /></a>
         <a href="https://www.linkedin.com/in/indulekha-a-g-955920222/"><FontAwesomeIcon icon={faLinkedin} /></a>
       </div>
    </footer>
  )
}

export default Footer
