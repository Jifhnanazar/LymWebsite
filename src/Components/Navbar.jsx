import React, { useState } from "react";
import { Link } from "react-router-dom";
import CompanyLogo from "../assets/Logos/Group 51.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="max-w-[1640px] mx-auto p-8  font-roboto flex items-center justify-between bg-black h-[65px] relative z-10 rounded-b-sm">
      <div>
        <Link to='/'>
        <img className="w-28 h-20" src={CompanyLogo} alt="companylogo" />
        </Link>
      </div>
      <div className="relative flex items-center p-2">
        {isMenuOpen ? (
          <div className="absolute top-[-5px] mt-2 py-2 w-[300px] bg-white rounded-lg shadow-lg left-[-250px] z-10  p-2 ease-in duration-300 ">
            <ul>
            <li className="px-4 mt-[-6px] py-2 cursor-pointer text-gray-400">
                menu
              </li>
              <Link to='/contact'>
              <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-green-500">
                Contact
              </li>
              </Link>
              <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-green-500">
                About
              </li>
              <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-green-500">
                More Data
              </li>
              <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-green-500">
                <Link to="/bb">Careers</Link>
              </li>
            </ul>
            <svg
              className="absolute top-2 right-2 w-6 h-6 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              onClick={closeMenu}
            >
              <path
                className="text-gray-600"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        ) : (
          <div className="flex items-center ease-out duration-300 ">
            <span className="bg-slate-800 text-white rounded-3xl w-[120px] h-[38px] sm:flex items-center justify-center text-center hidden">
              Get in touch
            </span>
          </div>
        )}
        <svg
          className="w-6 h-6 ml-2 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          onClick={toggleMenu}
        >
          <path
            className="text-white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2 6h20M2 18h20"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
