import './App.css';
import React from 'react';
import Menu from './components/Menu/menu';
import Hero from './components/HeroSection/Hero';
import Logo from './components/Logo/logo';
import ProjectsSection from './components/Projects/ProjectsSection';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import TestimonialSlider from './components/Testimonials/Testimonial';

function App() {
  return (
    <div className="App">
      <div style={{ height: '100vh', position: 'relative', overflow: 'hidden' }} id='home'>
        <Hero />
        <Menu />
      </div>
      < div style={{ paddingTop: '50px', }}>
        <Logo direction="left" />
        <Logo direction="right" />
      </div>
      <AboutMe id='about' />
      <div style={{ background: 'white' }}>
        <ProjectsSection id="projects" />
      </div>
      <TestimonialSlider id="feedback" />
      <Footer />
    </div>
  );
}

export default App;