import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
import Epub from '../components/Epub';
import Digita from '../components/Digita';




function Project() {
 
  return (
   
    
    <div>
       <NavBar/>
       <Hero2 heading="Project Details:" text="Epub and Website Price Rate & Demo"/>
      <Digita/>      
       <Epub/>
        <Footer/>
    </div>
  )
}

export default Project
