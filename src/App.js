import './App.css';
import React from 'react';
import Menu from './components/Menu/menu';
import Hero from './components/HeroSection/Hero';
import Logo from './components/Logo/logo';
import ProjectsSection from './components/Projects/ProjectsSection';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <div className="App" id="home">
      <div style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
        <Hero />
        <Menu />
      </div>
      < div style={{ paddingTop: '50px', }}>
        <Logo direction="left" />
        <Logo direction="right" />
      </div>
      <AboutMe id='about'/>
      <div style={{ background: 'white' }}>
        <ProjectsSection id="projects"/>
      </div>
    </div>
  );
}

export default App;