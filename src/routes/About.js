import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import About2 from '../components/About2';
import Hero2 from '../components/Hero2';



export default function About() {
  return (
    <div>
    <NavBar/>
    <Hero2 heading="Who am I?" text="Jitendra Pratap as a Froentend Developer"/>
  <About2/>
        <Footer/>
    </div>
  )
}
