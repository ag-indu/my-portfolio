import React from 'react'
import CodingImage from '../assets/undraw_typing-code_6t2b.svg';

const Home = () => {
  return (
    <div className='home page-wrapper' id='home'>
      <img src={CodingImage} alt="Typing code" className='home-img' />
      <h1>
        Hi There! <br /> I'm <span className="highlighted-name">Indulekha</span>
      </h1>
    </div>
  )
}

export default Home
