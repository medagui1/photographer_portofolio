import { useState } from 'react'
import './App.css'
import Preloading from './assets/sections/Preloading'
import Header from './assets/sections/Header'
import Hero from './assets/sections/Hero'
import Gallery from './assets/sections/Gallery'

function App() {

  return (
    <>
    <Preloading />
    <Header />
    <Hero />
    <Gallery />
    </>
  )
}

export default App
