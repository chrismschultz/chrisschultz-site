import './App.css'
import { NavBar } from './components/NavBar'

import { Home, About, Experience } from './sections';


function App() {
  return (
    <>
    <NavBar />
    <Home />
    <About />
    <Experience />
    </>
  )
}

export default App;
