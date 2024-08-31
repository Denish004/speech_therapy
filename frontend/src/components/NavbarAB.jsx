// import React from 'react';
// import Button from './ButtonAB';
// import img from './assets/logo.png'

// const Navbar = () => {
//   return (
//     <div className="bg-white p-4 shadow-md sticky top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center">
        
//         {/* Brand Logo with Funky Font */}
//         <a href="/" className="text-3xl font-bold" style={{ fontFamily: 'Cursive, sans-serif' }}>
//           <img src={img}/>
//         </a>

//         {/* Centered Menu Links */}
//         <div className="hidden md:flex space-x-6 mx-auto">
//           <a href="/" className="text-gray-700 hover:text-purple-600">Home</a>
//           <a href="#" className="text-gray-700 hover:text-purple-600">About</a>
//           <a href="#" className="text-gray-700 hover:text-purple-600">Services</a>
//           <a href="/contact" className="text-gray-700 hover:text-purple-600">Contact us</a>
//         </div>

//         {/* Get Started Button */}
//         <div>
//           <Button />
//         </div>
//       </div>
//     </div>
//   );
// };


// export default Navbar;
import React from 'react';
import Button from './ButtonAB';
import img from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className="bg-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Brand Logo with Funky Font */}
        <a href="/" className="text-3xl font-bold" style={{ fontFamily: 'Cursive, sans-serif' }}>
          <img src={img} alt="Brand Logo" className="w-auto" style={{height:"3.5rem"}}/> {/* Add alt and optional styling */}
        </a>

        {/* Centered Menu Links */}
        <div className="hidden md:flex space-x-6 mx-auto">
          <a href="/" className="text-gray-700 hover:text-purple-600">Home</a>
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