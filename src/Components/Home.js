import React from 'react';
import CodingImage from '../assets/undraw_typing-code_6t2b.svg';

const Home = () => {
  return (
    <section
      id="home"
      className="px-4 min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 text-white"
    >
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Hi There! <br /> I'm <span className="text-sky-400">Indulekha</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-md mx-auto md:mx-0">
          A passionate Software Engineer who loves turning coffee into code ☕.
        </p>
      </div>

      {/* Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={CodingImage}
          alt="Typing code"
          className="w-[220px] sm:w-[300px] md:w-[400px] object-contain"
        />
      </div>
    </section>
  );
};

export default Home;
