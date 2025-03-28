import { useState, useEffect, useRef } from 'react'
import Navbar from './navbar'
import About from './pages/about'
import Experience from './pages/experience'
import Projects from './pages/projects'
import Home from './pages/home'
import Contact from './pages/contact'
import Footer from './footer'

import './navstyle.css'
import './App.css'
import './footerstyle.module.css'




function App() { 
  let PrevScrollHeight = useRef(0)
  const[ScrollHeight, setScrollHeight] = useState(0)
  const[NavHeight, setNavHeight] = useState(100)
  let component



  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; 
    setScrollHeight(-scrollPosition);
  
  });

  useEffect(() => {
    if((ScrollHeight < PrevScrollHeight.current) && (ScrollHeight < 0)){
      setNavHeight(50)
    }
    else{
      if(ScrollHeight > -800){
        setNavHeight(100)
      }
    }
    PrevScrollHeight.current = ScrollHeight;
  
  }, [ScrollHeight])


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
    case "/contact":
      component = <Contact></Contact>
      break
    case "/experience":
      component = <Experience></Experience>
      break
  }

  return (
    <>
      <Navbar NavHeight = {NavHeight}></Navbar>
      <div className = "container">
        <div>{NavHeight}</div>
        <div>Scroll height: {ScrollHeight}</div>
      </div>
      <Footer></Footer>
      
    </>
  )
}

export default App
