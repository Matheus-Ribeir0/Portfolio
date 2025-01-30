
import './App.css';
import AboutMe from './sections/about/aboutMe';
import Hether from './components/heather/heather';
import MainPage from './sections/mainPage/mainPage';
import ParticlesComponent from './components/particles/particles';
import Projects from './sections/projects/projects';

function App() {
  return (
    <div className="App">
      <ParticlesComponent id="particles"/>
      <Hether/>
      <MainPage/>
      <AboutMe/>
      <Projects/>
    </div>
  );
}

export default App;
