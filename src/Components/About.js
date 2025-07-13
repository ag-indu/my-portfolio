import React from 'react';
import ProfilePhoto from '../assets/about/profilePhoto.JPG';

const About = () => {
  return (
    <section id="about" className="text-white py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Get to <span className="text-sky-400">Know</span> Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left: Profile + Intro */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <img
              src={ProfilePhoto}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-sky-400 shadow-lg"
            />
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Hi! I’m <span className="text-sky-400 font-semibold">Indulekha</span>, a
              <span className="text-sky-400 font-semibold"> Software Engineer</span> who loves turning
              <span className="text-sky-400 font-semibold"> coffee into code ☕</span>.
            </p>
            <p className="text-slate-400 text-sm sm:text-base">
              I'm into building sleek, responsive web apps and I’m always hungry to learn something new.
              Outside coding, you’ll find me vibing to music, binge-watching horror or sitcoms, or getting lost in books.
            </p>
          </div>

          {/* Right: Education */}
          <div className="flex-1 bg-[#1e293b] rounded-lg p-6 shadow-md w-full max-w-md">
            <h3 className="text-xl font-bold text-sky-400 mb-4">🎓 Education</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">B.Tech in Computer Science</h4>
                <p className="text-slate-400 text-sm">College of Engineering Trivandrum</p>
                <p className="text-slate-500 text-xs">2021 – 2025</p>
              </div>
              <hr className="border-slate-600" />
              <div>
                <h4 className="font-semibold">Higher Secondary</h4>
                <p className="text-slate-400 text-sm">Placid Vidya Vihar,Changancherry</p>
                <p className="text-slate-500 text-xs">2019 – 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
