import '../../App.css'
import React from 'react'

import Footer from '../Footer';
import ContactBody from './ContactBody';
import Navbar from '../Navbar';
function Contact()
{
    return(
        <>
       <Navbar/>
      <ContactBody/>
        <Footer/>
        </>
    )
}
export default Contact;