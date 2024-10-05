
import './App.css';
import Hether from './components/heather/heather';
import MainPage from './components/mainPage/mainPage';

import ParticlesComponent from './components/particles/particles'; 

function App() {
  return (
    <div className="App">
      <ParticlesComponent id="particles"/>
      <Hether/>
      <MainPage/>
    </div>
  );
}

export default App;
