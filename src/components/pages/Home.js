import '../../App.css'
import React from 'react'
import HeroSection from '../HeroSection'
import Navbar from '../Navbar'
import Footer from '../Footer'





function home()
{
    return(
        <>
      <Navbar/>
        <HeroSection/>
      <Footer/>
        </>
    )
}
export default home;