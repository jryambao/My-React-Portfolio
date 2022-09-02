import React from 'react'
import about from '../assets/about.png';
import profile from '../assets/profile.jpg'
import profile1 from '../assets/profile1.jpg'
import '../App.css'
const About = () => {
  return (
    <div className='h-screen w-full bg-black pt-24' name="about">
    <div className="container mx-auto">
      <div className='flex flex-row-reverse'>
        <div className='profile'>
          <img className='mt-5 border-4 border-purple' src={profile1}  alt="profile" />
        </div>
        <div className='flex flex-col'>
          <div>
            <h3 className='text-white text-5xl font-header font-bold text-start'>About Me</h3>
          </div>
          <div className="flex flex-col items-start mt-5">
            <p className="text-white font-medium w-5/6 text-xl leading-8 leading-10">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam sed explicabo, eaque doloremque a quaerat tempora quos iusto eum blanditiis perferendis, quis voluptatem earum nostrum facilis! Laboriosam nam eos illo.
            </p>
            <p className="text-white font-medium w-5/6 text-xl leading-8 leading-10">
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