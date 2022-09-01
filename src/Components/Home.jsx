import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Resume from '../assets/Resume.pdf'
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
        
          <h4 className="text-xl sm:text-4xl font-semibold text-white text-center font-header">I'm, <span className="text-purple-400 font-bold text-8xl font-signature"> John Yambao</span> </h4>
          <h2 className="text-4xl sm:text-7xl font-bold text-white text-center
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-400 to-indigo-900
            animate-text font-header mt-4">Fullstack Developer</h2>
          <div className="flex justify-center mt-8">
          
          <a href={Resume} download="Resume" class="rounded-md relative inline-flex items-center justify-center h-12 px-6 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 shadow-md group">
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-purple-500 to-purple-800 group-hover:translate-x-0 ease">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease text-xl">Download CV</span>
            <span class="relative invisible">Download CV</span>
          </a>

            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-purple-800 cursor-pointer mx-5 h-12 text-xl border-2 border-purple-500 shadow-md group"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;