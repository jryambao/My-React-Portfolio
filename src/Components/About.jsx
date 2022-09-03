import React from 'react'
import about from '../assets/about.png';
import profile from '../assets/profile.jpg'
import profile1 from '../assets/profile1.jpg'
import '../icons.css'
import '../App.css'
const About = () => {
  return (
    <div className='h-full w-full pb-10 sm:h-screen bg-black pt-24' name="about">
    <div className="container mx-auto">
      <div className='md:flex md:flex-row-reverse flex flex-col'>
        <div className='profile'>
          <img className='mt-5 border-2 border-white' src={profile1}  alt="profile" />
        </div>
        <div className='flex flex-col'>
          <div>
            <h3 className='text-white text-5xl font-header font-bold text-start head-text'><span className='border-b-4 border-gray-500'>About</span> <span className='border-b-4 border-purple-500 text-4xl text-purple-500'>Me, Myself & I</span></h3>
          </div>
          <div className="flex flex-col items-start mt-5">
            <p className="text-white font-medium sm:w-5/6 text-xl leading-8 leading-10">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam sed explicabo, eaque doloremque a quaerat tempora quos iusto eum blanditiis perferendis, quis voluptatem earum nostrum facilis! Laboriosam nam eos illo.
            </p>
            <p className="text-white font-medium sm:w-5/6 text-xl leading-8 leading-10">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam sed explicabo, eaque doloremque a quaerat tempora quos iusto eum blanditiis perferendis, quis voluptatem earum nostrum facilis! Laboriosam nam eos illo.
            </p>
          </div>
          
          
        </div>
      </div>
     
      
    </div>
    
  </div>
  )
}

export default About