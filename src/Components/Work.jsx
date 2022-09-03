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
      description: "First E-commerce site. Awarded as best in mini project 1 in KoDego.",
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
      description: "We remastered the V1 of Araktek and used Tailwind instead of Bootstrap.",
      tech:"React, Tailwind, Laravel, Material UI",
      link:"https://araktek.vercel.app/",
      git:"https://github.com/georgeromarrr/araktek",
    },
    {
      id: 4,
      src: cms,
      title: "Content Management System",
      description: "This is where we can Create,Edit and Delete products to our E-commerce site. Use the account below to enter.",
      tech:"React, Tailwind, Laravel, Material UI",
      link:"https://araktek-admin.vercel.app/login",
      acct:"user:admin@gmail.com",
      pass:"pass:123456789",
      git:"https://github.com/georgeromarrr/araktek-admin"
    },
  ]
  return (
    <div className='h-screen w-full bg-gray-900 pt-24 ' name="portfolio">
      <div className="container mx-auto">
        <h3 className='text-white text-5xl font-header font-bold text-start underline underline-offset-4'>Portfolio</h3>
        <div className="portfolio-container invisible sm:visible">
        {works.map(({i, id, src, title, description, tech, link, git, acct, pass }) => (
          <div onMouseEnter={()=> showButton(i)} onMouseLeave={hideButton}   className="box">
            <div className="imgBx shadow-lg shadow-black grid-cols-4 xl:grid-cols-2">
              <img className='border-4 border-black' src={src} alt="" srcset="" />
            </div>
            <div className="content">
              <div>
                <h2 className='font-bold font-header text-xl'>{title}</h2>
                <p className='text-purple font-semibold font-nav text-l'>{tech}</p>
                <p className='text-xs'>{description}</p>
                <div className="flex flex-col">
                  <p className='text-xs font-normal font-nav mt-5'>{acct}</p>
                  <p className='text-xs font-normal font-nav'>{pass}</p>
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
      </div>
       
  </div>
  )
}

export default Work