import React from 'react';
import { ReactTyped as Typed } from 'react-typed';

const Hero = () => {
  return (
    <div className="bg-[rgb(249,248,240)] h-screen flex flex-col justify-center items-center text-center">
  <h1 className="-mt-20 -pt-10 text-4xl md:text-6xl font-bold text-gray-800" style={{marginBottom:'200px'}}>
    Speech therapy that makes your home a {" "}
    <span className="text-purple-600">
      <Typed
        strings={['classroom']}
        typeSpeed={100}
        backSpeed={50}
        loop
      />
    </span>
  </h1>
</div>

  );
};

export default Hero;
