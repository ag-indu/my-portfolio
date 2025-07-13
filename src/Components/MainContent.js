import React from 'react';
import Home from './Home.js';
import About from './About.js';

const MainContent = () => {
  return (
    <main className="text-white text-4xl relative z-10 pt-20">
      <Home/>
      <About/>
    </main>
  );
};

export default MainContent;
