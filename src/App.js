import React, { useEffect } from 'react';
import './App.css';
import AboutMe from './sections/about/aboutMe';
import Hether from './components/heather/heather';
import MainPage from './sections/mainPage/mainPage';
import ParticlesComponent from './components/particles/particles';
import Projects from './sections/projects/projects';
import TechStack from './sections/techStack/techStack';
import ContactMe from './sections/contactMe/contactMe';
import Navigation from './components/navigation/navigation';
import Footer from './components/footer/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="App">
      <Navigation />
      <div className='particles_container'>
          <ParticlesComponent id="particles" />
        </div>
        <Hether />
      <div>
        
        <MainPage />
        
        <div className='fade'>
          <div data-aos="fade-up" id="about-me">
            <AboutMe />
          </div>
          <div data-aos="fade-right" id="projects">
          <div className='radial-color'></div>
            <Projects />
            
          </div>
          <div data-aos="fade-up" id="tech-stack">
            <TechStack />
          </div>
          <div data-aos="fade-right" id="contact-me">
          <div className='radial-color' style={{ bottom: "100px" }}></div>
            <ContactMe />
          </div>
        </div>
        <Footer/>
        
      </div>
      
    </div>
  );
}

export default App;
