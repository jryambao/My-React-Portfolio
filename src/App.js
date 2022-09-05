import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Work from './Components/Work';
import Skills from './Components/Skills';
import Icons from './Components/Icons';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>

      <About/>
      <Skills/>
      <Work/>
      

    </div>
  );
}

export default App;
