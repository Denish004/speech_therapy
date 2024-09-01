
import React from 'react';
import Button from './ButtonAB';
import img from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className="bg-white p-2 shadow-md sticky top-0 z-50">
      <div className="w-full flex justify-between items-center">
        <a href="/home" className="text-3xl font-bold" style={{ fontFamily: 'Cursive, sans-serif', padding: 0 }}>
          <img src={img} alt="Brand Logo" className="w-auto" style={{ height: "5.0rem" }} />
        </a>

        {/* Centered Menu Links */}
        <div className="hidden md:flex space-x-6 mx-auto">
          <a href="/home" className="text-gray-700 hover:text-purple-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-purple-600">About</a>
          <a href="#" className="text-gray-700 hover:text-purple-600">Services</a>
          <a href="/contact" className="text-gray-700 hover:text-purple-600">Contact us</a>
        </div>

        {/* Get Started Button */}
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Navbar;