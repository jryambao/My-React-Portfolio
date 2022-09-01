import React from 'react'
import about from '../assets/about.png';
import profile from '../assets/profile.jpg'
const About = () => {
  return (
    <div className='h-screen w-full bg-black pt-24' name="about">
    <div className="container mx-auto">
      <div className='flex justify-between'>
        <div className=''>
          <h3 className='text-white text-4xl font-header font-bold text-start'>About Me</h3>
          <img className='w-screen h-5/6' src={profile} alt="profile" srcset="" />
        </div>
        <div className='flex justify-end'>
          <p className="text-white font-medium w-4/6 text-xl leading-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam sed explicabo, eaque doloremque a quaerat tempora quos iusto eum blanditiis perferendis, quis voluptatem earum nostrum facilis! Laboriosam nam eos illo.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis illum tempore accusantium neque vitae sint aspernatur maxime vero quaerat, eligendi officia nemo a inventore consequatur dolores dignissimos modi et explicabo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus nulla pariatur labore voluptatum voluptates, nostrum velit, cupiditate assumenda consequuntur voluptatem, doloribus sunt consectetur modi est culpa corporis in vel!

          </p>
        </div>
      </div>
     
      
    </div>
    
  </div>
  )
}

export default About