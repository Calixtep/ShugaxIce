import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import Flavors from './Flavors'
import Mission from './Mission'
import Subscribe from './Subscribe'
import Modal from './components/Modal'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Flavors />
      <Mission />
      <Subscribe />
      <Footer />
      <Modal />
    </>
  )
}

export default App
