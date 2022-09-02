import React from 'react'
import '../icons.css'
import hardpc from '../assets/hardpc.JPG';
import araktek1 from '../assets/araktek1.JPG';
import araktek2 from '../assets/araktek2.JPG';
import cms from '../assets/cms.JPG';
const Work = () => {
  const works=[
    {
      id: 1,
      src: hardpc,
      title: "HardPC",
      description: "First E-commerce site. Awarded as best in mini project 1 in Kodego",
      tech:"HTML, CSS, Bootstrap",
    },
    {
      id: 2,
      src: araktek1,
      title: "Araktek V1",
      description: "An E-commerce site made for gamers out there.",
      tech:"React, Bootstrap, Laravel, Material UI",
    },
    {
      id: 3,
      src: araktek2,
      title: "Araktek V2",
      description: "We remastered the V1 of Araktek and used Tailwind instead of Bootstrap.",
      tech:"React, Tailwind, Laravel, Material UI",
    },
    {
      id: 4,
      src: cms,
      title: "Content Management System",
      description: "This is where we can Create,Edit and elete products to our E-commerce site.",
      tech:"React, Tailwind, Laravel, Material UI",
    },
  ]
  return (
    <div className='h-screen w-full bg-gray-900 pt-24' name="portfolio">
      <div className="container mx-auto">
        <h3 className='text-white text-4xl font-header font-bold text-start'>Portfolio</h3>
        <div className="portfolio-container">
        {works.map(({ id, src, title, description, tech }) => (
          <div className="box">
            <div className="imgBx">
              <img src={src} alt="" srcset="" />
            </div>
            <div className="content">
              <div>
                <h2 className='font-bold font-header text-xl'>{title}</h2>
                <p className='text-purple font-semibold font-nav text-l'>{tech}</p>
                <p className='text-xs'>{description}</p>
              </div>
              
            </div>
            
            
          </div>
    
          ))}
        </div> 
      </div>
       
  </div>
  )
}

export default Work