import React from 'react';
import Navbar from './component/Navbar';
import BackgroundShapes from './component/BackgroundShapes';
import Hero from './component/Hero';
import About from './component/About';
import Projects from './component/Projects';
import Contact from './component/Contact';
import './App.css'


function App() {
  return (
    <>
      <BackgroundShapes />
      <Navbar />
      <Hero />   
      <About />  
      <Projects/>
      <Contact></Contact>
      {/* Add HeroSection here next */}
    </>
  );
}

export default App;