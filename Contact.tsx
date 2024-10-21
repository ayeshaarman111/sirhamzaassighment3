import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className=' grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl' data-aos="zoom-out-right">FEEL FREE TO CONTACT</h2>
            <p className='text-gray-100 text-[18px] pt-2' data-aos="zoom-out-right">Drop me a line , give me a call ,or send me a messages by submitting a form</p>
      <div className='flex gap-3 items-center ' data-aos="zoom-out-right">
      <MdOutlineMailOutline size={30} />ayeshaqasim111@gmail.com
      </div>

      <div className='flex gap-3 items-center ' data-aos="zoom-out-right">
      <FiPhoneCall size={30} />03158214971
      </div>
      </div>
      <div className='space-y-8 '>
        <div className='flex flex-col gap-1' data-aos="zoom-out-right">
            <label htmlFor="name">Name</label>
           <input type="text" 
           className='h-[40px] bg-transparent boder-accent'
           id='name'/> 

        </div>
        <div className='flex flex-col gap-1' data-aos="zoom-out-right">
            <label htmlFor="email">Email</label>
           <input type="text" 
           className='h-[40px] bg-transparent boder-accent'
           id='email'/> 

        </div>

        <div className='flex flex-col gap-1' data-aos="zoom-out-right">
            <label htmlFor="msg">Message</label>
           <textarea 
           className='h-[40px] bg-transparent boder-accent'
           id='msg' rows={8}>
           </textarea> 

        </div>

        <button className='bg-accent p-2 px-6 ' data-aos="zoom-out-right">Send</button>
      
        </div>
      </div>
    </div>
  )
}

export default Contact
