import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
import Form  from '../components/Form';

const Contact = () => {
  return (
    <div>
    <NavBar/>
    <Hero2 heading="Contact Page" text="This is my Amazing Contact Page"/>
    <Form/>
    <Footer/>
    </div>
  )
}

export default Contact
