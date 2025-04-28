import './App.css'
import { NavBar } from './components/NavBar'

import { Home, About, Experience, Contact } from './sections';


function App() {
  return (
    <>
    <NavBar />
    <Home />
    <About />
    <Experience />
    <Contact />
    </>
  )
}

export default App;
