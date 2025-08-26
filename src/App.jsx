import React, { useEffect, useState, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import Title from './components/Title'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  // const mouse = useRef({ x: 0, y: 0 })
  // const position = useRef({ x: 0, y: 0 })

  // const dotRef = useRef(null)
  // const outlineRef = useRef(null)

  // useEffect(() => {
  //   const handleMouseMove = (e)=> {
  //     mouse.current.x = e.clientX
  //     mouse.current.y = e.clientY
  //   }

  //   document.addEventListener('mousemove', handleMouseMove)

  //   const animate = () => {
  //     position.current.x += (mouse.current.x - position.current.x) * 0.1
  //     position.current.y += (mouse.current.y - position.current.y) * 0.1

  //     if(dotRef.current && outlineRef.current){
  //       dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`
  //       outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`
  //     }
  //     requestAnimationFrame(animate)
  //   }
  //   animate()

  //   return ()=> {
  //     document.removeEventListener('mousemove', handleMouseMove)
  //   }
  // })

  
  return (
    <div className='dark:bg-black relative'>
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme}/>

{/*      
      <div ref={outlineRef} className='fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]'>

      {/* Custom Cursor Dot */}
       {/* <div ref={dotRef} className='fixed top-0 left-0 h-3 w-3 rounded-full border border-primary pointer-events-none z-[9999]'> } } */}

      </div>


    

  )
}

export default App
