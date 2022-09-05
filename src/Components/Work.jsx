import React, {useState} from 'react'
import '../icons.css'
import hardpc from '../assets/hardpc.JPG';
import araktek1 from '../assets/araktek1.JPG';
import araktek2 from '../assets/araktek2.JPG';
import cms from '../assets/cms.JPG';
const Work = () => {
  const [isHovered, setHover] = useState(-1);
    const showButton = (i)=>{
        setHover(i)
    }
    const hideButton =()=>{
        setHover(-1)
    }
  const works=[
    {
      id: 1,
      src: hardpc,
      title: "HardPC",
      description: "First E-commerce site. Awarded as best in mini project 1 in KoDego. First Project after two weeks of Bootcamp.",
      tech:"HTML, CSS, Bootstrap",
      link:"https://hardpc.herokuapp.com/homepage.html",
      git:"https://github.com/jryambao/Multipage"
    },
    {
      id: 2,
      src: araktek1,
      title: "Araktek V1",
      description: "An E-commerce site made for gamers, professionals and collectors out there.",
      tech:"React, Bootstrap, Laravel, Material UI",
      link:"https://araktek-e-commerce.web.app/",
      git:"https://github.com/georgeromarrr/mini-project-2"
    },
    {
      id: 3,
      src: araktek2,
      title: "Araktek V2",
      description: "A Fullstack E-commerce Application. It's a remaster of Araktek V1 using Tailwind instead.",
      tech:"React, Tailwind, Laravel, Material UI",
      link:"https://araktek.vercel.app/",
      git:"https://github.com/georgeromarrr/araktek",
    },
    {
      id: 4,
      src: cms,
      title: "Content Management System",
      description: "This is where we can Create,Edit and Delete products to our E-commerce site.",
      tech:"React, Tailwind, Laravel, Material UI",
      link:"https://araktek-admin.vercel.app/login",
      acct:"User: admin@gmail.com",
      pass:"Pass: 123456789",
      git:"https://github.com/georgeromarrr/araktek-admin"
    },
  ]
  return (
    <div className='2xl:h-screen h-full w-full bg-gray-900 sm:pt-24 py-12' name="portfolio">
      <div className="container mx-auto">
        <h3 className='text-white text-5xl font-header font-bold sm:text-start underline underline-offset-4 decoration-gray-500 text-center'>Portfolio</h3>
        <div className="portfolio-container">
        {works.map(({i, id, src, title, description, tech, link, git, acct, pass }) => (
          <div onMouseEnter={()=> showButton(i)} onMouseLeave={hideButton}   className="box">
            <div className="imgBx grid-cols-4 xl:grid-cols-2">
              <img className='border-4 border-black' src={src} alt="" srcset="" />
            </div>
            <div className="content">
              <div>
                <h2 className='font-bold text-white font-header text-xl text-center'>{title}</h2>
                <p className='text-white font-semibold font-nav text-l'>{tech}</p>
                <p className='text-xs text-white'>{description}</p>
                <div className="flex flex-col lg:visible invisible">
                  <p className='text-xs text-white font-semibold font-nav mt-5'>{acct}</p>
                  <p className='text-xs text-white font-semibold font-nav'>{pass}</p>
                </div>
                
                {isHovered === i && (
                  <div className='buttons flex justify-between items-end mt-5'>
                    <a href={git}><button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Source</button></a>
                    <a href={link}><button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Demo</button></a>
                  </div>
              )}
              </div>       
            </div>        
          </div>
          ))}
        </div>
        <div className='flex flex-col sm:justify-end pt-24'>
          <span className="text-white text-2xl font-semibold">Note:</span>
          <p className='text-white text-xl font-nav'>You may have noticed that this is almost all E-commerce projects, I am looking into adding more projects soon so I can fill the void spaces in this section :)</p>
          <p className='text-white text-xl font-nav'>Please also note that HardPC and Content Management System isn't responsive, it was only made to be viewed on either Laptop or Desktop.</p>

        </div> 
      </div>
       
  </div>
  )
}

export default Work