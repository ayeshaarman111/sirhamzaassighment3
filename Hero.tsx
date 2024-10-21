import React from 'react'
import Navbar from './Navbar'


const Hero = () => {
  return (
    <div id='hero'  className='min-h-screen bg-no-repeat bg-[url(/pic7.jpg)] bg-left lg:bg-[15%] bg-cover'
    style={{backgroundSize:"90%"}}>
   


        <Navbar/>
        <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
            <div className='hidden lg:block'></div>
            <div className='text-[50px] sm:text-[60px] font-bold leading-tight flex justify-end items-center'>
                
     <div>
        <p data-aos="zoom-in-down">I AM </p>
        <p data-aos="zoom-in-down">AYESHA</p>
        <p data-aos="zoom-in-down">ARMAN</p>
       </div>
     </div>
       
    </div>
        
    
    </div>
  )
}

export default Hero
