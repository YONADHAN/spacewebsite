
import React from 'react';
import bgVideo from "./assets/earth-bg.mp4";
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Services from './components/Services/Services.jsx';
import Banner from './components/Banner/Banner.jsx';
import Banner2 from './components/Banner/Banner2.jsx';
import Footer from './components/Footer/Footer.jsx';
function App() {
  

  return (
    <div className='select-none'>
     <div  >
       <div className='h-[700px] relative'>
          <video
          autoPlay
          loop
          muted
          className='relative h-[700px] w-full right-0 top-0 object-cover z[-1]'> 
             <source src={bgVideo} type="video/mp4" />
          </video>
          <Navbar/>
          <Hero/>
          <Banner/>
          <Banner2/>
          <Footer/>
       </div>
       
     </div>
     <Services/>

    </div>
  )
}

export default App
