import React from 'react'
import Heading from './Heading'
import Card from './Card'


const data =[
    {
        id : 0,
        title:"HTML TABLE",
        desc:"A html and css based table for managing and organizing and attractive table",
        img:"/pic2.PNG",
        tags:["Html","Css"],

    },
    {
        id:1,
        title:"Countdown Timer",
        desc:"A NEXT.JS and typescript powered to track time  ",
        img:"/pic3.PNG",
        tags:["NEXT.JS ", "TYPESCRIPT", "NODE JS"],

    },

    {
        id:2,
        title:"RESUME",
        desc:"A basic HTML AND CSS based attaractive resume",
        img:"/myfirstresume.PNG",
        tags:["HTML","CSS"],
    },

    {
      id:3,
      title:"WEB SITE",
      desc:"Basic sebsite build witj nevigated about contact and skills page it's include navbar hero and footer",
      img:"/pic4.PNG",
      tags:["HTML","TAILWIND","NEXT.JS","NODE.JS","TYPESCRIPT"],
    },
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
       <Heading title='my projects'/>
        <div className='grid gap-10 xl:gap-0  xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center '>
      {data.map((el) => (<Card
      key={el.id}
      title={el.title}
      desc={el.desc}
      img={el.img}
      tags={el.tags}
      
      />))}
 </div>

    </div>
  )
}

export default Projects
