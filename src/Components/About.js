import React from 'react'
import ProfilePhoto from '../assets/about/F0EA6544-1EA2-4C13-90C4-2F93121C762E.JPG'

const About = () => {
  return (
    <div className='about page-wrapper' id='about'>
      <h1 className='about-header'>Get to Know Me</h1>
      <div className='about-content'>
        <div className='about-image'>
            <img src={ProfilePhoto} alt="" className=''/>
        </div>
        <div className="about-text">
            <p>Hey there! I’m Indulekha, a Software Engineer who loves turning coffee into code ☕. I specialize in building beautiful, functional web applications and I’m obsessed with learning new technologies.</p>
            <p>When I’m not coding, you can find me exploring new music, binge-watching horror movies or sitcom, or reading. I’m passionate about personal growth and love making systems more efficient—both in code and in life!</p>
            <p>Let’s build something awesome together </p>
        </div>
      </div>

    </div>
  )
}

export default About
