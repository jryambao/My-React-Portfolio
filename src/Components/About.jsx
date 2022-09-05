import React from 'react'
import about from '../assets/about.png';
import profile from '../assets/profile.jpg'
import profile1 from '../assets/profile1.jpg'
import '../icons.css'
import '../App.css'
const About = () => {
  return (
    <div className='h-full w-full pb-10 lg:h-screen bg-black sm:pt-24 pt-12' name="about">
    <div className="container mx-auto">
      <div className='lg:flex lg:flex-row-reverse flex flex-col'>
        <div className='profile'>
          <img className='mt-5 border-2 border-white' src={profile1}  alt="profile" />
        </div>
        <div className='flex flex-col'>
          <div>
            <h3 className='text-white text-5xl font-header font-bold text-start head-text'><span className='border-b-4 border-gray-500'>About</span> <span className='border-b-4 border-purple-500 sm:text-4xl text-2xl text-purple-500'>Me, Myself & I</span></h3>
          </div>
          <div className="flex flex-col items-start mt-5">
            <p className="text-white font-medium sm:w-5/6 text-xl leading-8 leading-10">
            A Fullstack Developer. I mainly focus on Frontend Development using React because I like transforming UI designs into a working website. I started learning Web Development when I joined KodeGo Bootcamp and I really enjoyed my time learning things about the development of a website.
            </p>
            <br />
            <p className="text-white font-medium sm:w-5/6 text-xl leading-8 leading-10">
            I love learning new things and I am fascinated by everything on how they are created. I joined KodeGo to meet experienced developers and motivate myself to try even harder and develop myself as a person. I love group coding the most because I am learning new things when I analyze how other developers code and I try to absorb those skills to further improve myself.</p>
          </div>
        </div>
      </div>
     
      
    </div>
    
  </div>
  )
}

export default About