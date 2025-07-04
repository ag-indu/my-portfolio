import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import MainContent from './Components/MainContent.js';
import Skills from './Components/Skills.js';
import Project from './Components/Project';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<MainContent/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Project/>}/>
      </Routes>
    </>
  );
}

export default App;
