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
      to: "/home"
    },
    {
      id: 2,
      link: "about",
      to: "/about"
    },
    {
      id: 3,
      link: "skills",
      to: "/skills"
    },
    {
      id: 4,
      link: "portfolio",
      to: "/portfolio"
    },
    {
      id: 5,
      link: "contact",
      to: "/contact"
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-10">
      <div>
        <h1 className="text-5xl font-signature ml-2">John</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, to }) => (
          <li
            key={id}
            className="text-xl px-4 cursor-pointer capitalize font-bold text-gray-400 hover:scale-105 duration-200 font-nav"
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
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl font-nav"
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