import './App.css';
import React from 'react';
import Menu from './components/Menu/menu';
import Hero from './components/HeroSection/Hero';
import Logo from './components/Logo/logo';
import ProjectsSection from './components/Projects/ProjectsSection';
import { Color } from 'three';

function App() {
  return (
    <div className="App">
      <div style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
        <Hero />
        <Menu />
      </div>
      < div style={{ paddingTop: '50px', }}>
        <Logo direction="left" />
        <Logo direction="right" />
      </div>
      <div style={{  background: 'white' }}>
        <ProjectsSection />
      </div>
    </div>
  );
}

export default App;