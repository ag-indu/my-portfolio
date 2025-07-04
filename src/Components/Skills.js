import React from 'react';
import htmlIcon from '../assets/skills/html5.svg';
import cssIcon from '../assets/skills/css.svg';
import jsIcon from '../assets/skills/javascript.svg';
import reactIcon from '../assets/skills/react.svg';
import pythonIcon from '../assets/skills/python.svg';
import mysqlIcon from '../assets/skills/mysql.svg'
import javaIcon from '../assets/skills/java.svg'
import djangoIcon from '../assets/skills/django.svg'


const Skills = () => {
    const skills = [
         { name: 'HTML5', img: htmlIcon },
         { name: 'CSS3', img: cssIcon },
         { name: 'JavaScript', img: jsIcon },
         { name: 'React', img: reactIcon },
         { name: 'Python', img: pythonIcon },
         { name: 'MySQL', img: mysqlIcon },
         { name: 'Java', img: javaIcon },
         { name: 'django', img: djangoIcon },
    ]
  return (
    <section className='page-wrapper skills-section'>
      <h2 className='skills-heading'>Professional <span className="highlighted-name">Skillset</span></h2>
      <div className="skills-container">
        {skills.map((skill,index)=>(
            <div className="skill-card" key={index}>
                <img src={skill.img} alt={skill.name} className='skill-icon' />
            </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
