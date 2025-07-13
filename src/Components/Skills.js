import React from 'react';
import htmlIcon from '../assets/skills/html5.svg';
import cssIcon from '../assets/skills/css.svg';
import jsIcon from '../assets/skills/javascript.svg';
import reactIcon from '../assets/skills/react.svg';
import pythonIcon from '../assets/skills/python.svg';
import mysqlIcon from '../assets/skills/mysql.svg';
import javaIcon from '../assets/skills/java.svg';
import djangoIcon from '../assets/skills/django.svg';

const Skills = () => {
  const skills = [
    { name: 'HTML5', img: htmlIcon },
    { name: 'CSS3', img: cssIcon },
    { name: 'JavaScript', img: jsIcon },
    { name: 'React', img: reactIcon },
    { name: 'Python', img: pythonIcon },
    { name: 'MySQL', img: mysqlIcon },
    { name: 'Java', img: javaIcon },
    { name: 'Django', img: djangoIcon },
  ];

  return (
    <section
      id="skills"
      className="pt-24 px-6 py-10 md:px-16 text-white flex flex-col items-center "
    >
      <h2 className="text-4xl font-bold mb-8 text-center">
        Professional <span className="text-sky-400">Skillset</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full max-w-5xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#1e293b] p-6 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 shadow-md"
          >
            <img
              src={skill.img}
              alt={skill.name}
              title={skill.name}
              className="w-16 h-16 object-contain mb-2 brightness-200"
            />
            <p className="text-sm mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
