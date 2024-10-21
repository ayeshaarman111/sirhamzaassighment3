import React from 'react'
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='container pt-2 cursor-pointer '>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-bold' ><b><i>Visual Fusion</i></b></div>
            <ul className=' gap-10 lg:gap-16 hidden md:flex font-light '>

                <li className='manuLink '><a href="#hero">Home</a></li>
                <li className='menuLink '><a href="#about">About</a></li>
                <li className='menuLink'><a href="#contact">Contact</a></li>
                <li className='menuLink'><a href="#Skills">Skills</a></li>
                <li className='menuLink'><a href="#Projects">projects</a></li>

            </ul>

            <IoMenuSharp />
        </div>
      
    </div>
  )
}

export default Navbar
