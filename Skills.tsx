import React from 'react'

const Skills = () => {
  return (
    <div  id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>

            <div data-aos="zoom-out-right">
                <h2 className='text-4xl md:text-5xl' >Technology I work with</h2>
         

            <ul className='text-gray-500 pt-2'>
                <li> Ability to write and edit technical documentation.</li>
                <li>Knowledge of modern HTML/CSS.</li>
                <li>Creative problem-solving skills.</li>
                <li>Strong organizational skills.</li>
                <li>Ability to work and thrive in a fast-paced environment.</li>
               <li>Hands-on experience with network diagnostics.</li>
            </ul>
          
          
            </div>

            <div>

                <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-down">TYPESCRIPT</h2>
                        <h2 data-aos="zoom-in-down">NEXT.JS</h2>
                        <h2 data-aos="zoom-in-down">HTML</h2>

                    </div>
                    

                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-down">    CSS</h2>
                        <h2 data-aos="zoom-in-down">PAYTHON</h2>
                        <h2 data-aos="zoom-in-down">TAILWIND</h2>

                    </div>
                    </div>
              
            </div>
        </div>
      
    </div>
  )
}

export default Skills
