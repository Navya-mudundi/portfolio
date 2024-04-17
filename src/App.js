import { NavBar } from './Components/NavBar';
import './App.css';
import { HashRouter } from 'react-router-dom';
import { Projects } from "./Components/Projects";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './Components/Banner.js';
import {Skills}   from './Components/Skills.js';
import { Footer } from "./Components/Footer";


function App() {
  return (
    <HashRouter>
    <div className="App">
    <NavBar/>
    <Banner/>   
    <Skills/>  
    <Projects/>  
    <Footer />   
    </div>
    </HashRouter>

  );
}

export default App;
