import React from 'react';
import Button from './ButtonAB';
const Navbar = () => {
  return (
    <div className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Brand Logo with Funky Font */}
        <a href="/" className="text-3xl font-bold" style={{ fontFamily: 'Cursive, sans-serif' }}>
          MyBrand
        </a>

        {/* Centered Menu Links */}
        <div className="hidden md:flex space-x-6 mx-auto">
          <a href="#" className="text-gray-700 hover:text-purple-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-purple-600">About</a>
          <a href="#" className="text-gray-700 hover:text-purple-600">Services</a>
        </div>

        {/* Get Started Button */}
        <div>
          {/* <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
            Get Started
          </button> */}
          <Button/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
