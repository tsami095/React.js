import '../../App.css'
import React from 'react'

import Footer from '../Footer';
//import HeroSection from '../HeroSection';
import '../HeroSection.css'
import ServiceBody from './ServiceBody';
import Navbar from '../Navbar';

function Services()
{
    return(
        <>
       <Navbar/>
      <ServiceBody/>
        <Footer/>
        </>
    )
}
export default Services;