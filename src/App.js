import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import MainContent from './Components/MainContent.js';
import Skills from './Components/Skills.js';
import Project from './Components/Project';
import Background from './Components/Background.jsx';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop/>
      <Background />
      <Navbar/>
      <Routes>
        <Route path='/' element={<MainContent/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Project/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
