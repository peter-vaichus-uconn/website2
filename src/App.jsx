import { useState } from 'react'
import Navbar from './navbar'
import About from './pages/about'
import Experience from './pages/experience'
import Projects from './pages/projects'
import Home from './pages/home'

import './navstyle.css'
import './App.css'

const[NavHeight, setNavHeight] = useState(100)

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY; 
  setNavHeight(-scrollPosition);
});

function App() { 
  let component

  switch (window.location.pathname){
    case "/":
      component = <Home></Home>
      break
    case "/about":
      component = <About></About>
      break
    case "/projects":
      component = <Projects></Projects>
      break
    case "/experience":
      component = <Experience></Experience>
      break
  }

  return (
    <>
      <Navbar />
      <div className = "container">{component}</div>
    </>
  )
}

export default App
