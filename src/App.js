import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import MainContent from './Components/MainContent.js';
import Skills from './Components/Skills.js';
import Project from './Components/Project';
import Background from './Components/Background.jsx';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0f172a] text-white">
      <ScrollToTop />
      <Background />
      <Navbar />

      
      <main className="flex-grow relative z-10">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}


export default App;
