import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.png'
import laravel from '../assets/laravel.png'
import mui from '../assets/mui.png'
const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: laravel,
      title: "Laravel",
      style: "shadow-red-400",
    },
    {
      id: 9,
      src: mui,
      title: "Material UI",
      style: "shadow-blue-600",
    },
  ];
  return (
    <div className='sm:h-screen h-full w-full bg-gradient-to-b from-gray-900 via-black to-black sm:pt-24 pt-0 ' name="skills">
      <div className="container mx-auto">
        <div>
          <h3 className='text-white text-5xl font-header font-bold text-start underline underline-offset-8 decoration-gray-500'>Skills</h3>
          <span className='text-white text-sm font-header font-semibold text-start'>These are the technologies I have used.</span>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md font-nav py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-24 h-24 mx-auto" />
              <p className="mt-4 text-white font-semibold">{title}</p>
            </div>
          ))}
        </div>
        
        

      </div>
      
    </div>
  )
}

export default Skills