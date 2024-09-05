import React from 'react';
import { ReactTyped as Typed } from 'react-typed';
import Button2 from './Button2AB';
import image from '../assets/image.png'; // Adjust the path based on your folder structure

const Hero = () => {
  return (
    <div>
      <div className=" h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})`, opacity: 0.7 }}
      />
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">
          Our Speech Therapy Services provide{" "}
          <span className="text-white">
            <Typed
              strings={['Expertise', 'Support', 'Guidance', 'Results']}
              typeSpeed={100}
              backSpeed={50}
              loop
            />
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-white max-w-2xl mx-auto mb-12">
          Partner with an experienced speech therapist for live sessions — with weekly practice activities and support to reach your goals faster.
        </p>

      </div>
      <a href="/login"><Button2 /></a>
        
    </div>
    </div>
    
  );
};

export default Hero;
