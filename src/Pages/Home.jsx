import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'

const Home = () => {
  return (
    <>
      <Navbar/> 
      <div className="min-h-screen flex items-center justify-center bg-gray-700">
        <HeroSection text="Hello Folks.!"/>
      </div> 
      <Footer/> 
    </>
  )
}

export default Home