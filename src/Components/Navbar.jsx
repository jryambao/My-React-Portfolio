import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Icons from "./Icons";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
     
    },
    {
      id: 2,
      link: "about",
      
    },
    {
      id: 3,
      link: "skills",
   
    },
    {
      id: 4,
      link: "portfolio",
    
    },
    {
      id: 5,
      link: "contact",
     
    },
  ];
  const home= "home";

  return (
    <div className="flex justify-between items-center w-screen md:w-full h-20 px-4 text-white bg-black fixed z-10">
      <div>
        <Link to={home} smooth duration={500}>
        <h1 className="text-5xl font-signature ml-2 cursor-pointer nav-title">John</h1>
        </Link>
      </div>

      <ul className="hidden md:flex nav-link">
        {links.map(({ id, link}) => (
          <li
            key={id}
            className="text-xl px-4 cursor-pointer capitalize font-bold text-gray-400 hover:scale-105 duration-200 font-nav hover:text-white"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl font-nav "
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
      
    </div>
  );
};

export default Navbar;