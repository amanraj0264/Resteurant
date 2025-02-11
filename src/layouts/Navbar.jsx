import { RxCross2 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

import logo from "./image/logo.png"
import { AiOutlineShopping } from "react-icons/ai";

import Respanct, { useState } from 'react';
import { NavLink } from "react-router-dom";


export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white drop-shadow-sm ">
      <div className="max-w-[1200px] mx-auto sm:px-4 xs:px-4 lg:px-8">
        <div className=" max-w-[1200px] flex justify-between items-center h-16">
          {/* Logo */}
        <div>
        <img src={logo} alt="logo"></img>
        </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            <NavLink to="/" className={({isActive})=>isActive ? "active-link" :""}>Home</NavLink>
            <NavLink to="/about" className={({isActive})=>isActive ? "active-link" :""}>About</NavLink>
            <NavLink to="/menu" className={({isActive})=>isActive ? "active-link" :""}>Menu</NavLink>
            <NavLink to="/shop" className={({isActive})=>isActive ? "active-link" :""}>Shop</NavLink>
            <NavLink to="/contact" className={({isActive})=>isActive ? "active-link" :""}>Contact</NavLink>
          </div>

          {/* Search and Mobile Menu */}
          <div className="flex items-center">
            {/* Search Bar */}
            <div className="hidden md:flex items-center">
              
              <div  className=" bg-gray-200 py-2 px-2 rounded-full">
             <AiOutlineShopping className="text-3xl"></AiOutlineShopping>
              </div>
              
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden ml-4 text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <RxCross2 size={24} /> : <IoMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-3">
            <NavLink to="/" className="block link">Home</NavLink>
            <NavLink to="/about" className="block link">About</NavLink>
            <NavLink to="/menu" className="block link">Menu</NavLink>
            <NavLink to="/shop" className="block link">Shop</NavLink>
            <NavLink to="/contact" className="block link">Contact</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};


