import React from 'react'
import ProfilePhoto from '../assets/about/F0EA6544-1EA2-4C13-90C4-2F93121C762E.JPG'

const About = () => {
  return (
    <div className='about page-wrapper' id='about'>
      <h1 className='about-header'>Get to <span className="highlighted-name">Know</span> Me</h1>
      <div className='about-content'>
        <div className='about-image'>
            <img src={ProfilePhoto} alt="" className=''/>
        </div>
        <div className="about-text">
            <p>Hey there! I’m <span className="highlighted-name">Indulekha</span>, a <span className="highlighted-name">Software Engineer</span> who loves turning <span className="highlighted-name">coffee into code ☕</span>. I specialize in building <span className="highlighted-name">beautiful, functional</span> web applications and I’m <span className="highlighted-name">obsessed with learning</span> new technologies.</p>
            <p>When I’m not coding, you can find me <span className="highlighted-name">exploring new music</span>, binge-watching <span className="highlighted-name">horror movies</span> or <span className="highlighted-name">sitcoms</span>, or reading. I’m passionate about <span className="highlighted-name">personal growth</span> and love making <span className="highlighted-name">systems more efficient</span>—both in code and in life!</p>
            <p>Let’s <span className="highlighted-name">build something awesome together</span>!</p>
        </div>
      </div>

    </div>
  )
}

export default About
