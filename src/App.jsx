import './App.css';
import Nav from './components/nav/nav.jsx';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import MainSection from './components/MainSection/MainSection.jsx';

function App() {
    return(
      <div className="flex flex-col items-center">
        <Nav/>
        <HeroSection/>
        <MainSection/>
      </div>
    )
}

export default App
