import './App.css'
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

import { Home, About, Experience, Contact } from './sections';


function App() {
  return (
    <>
    <NavBar />
    <Home />
    <About />
    <Experience />
    <Contact />
    <Footer />
    </>
  )
}

export default App;
