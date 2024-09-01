import React from 'react';

import Lottie from 'react-lottie';
import animationData from '../lotties/signup.json';

export default function App() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height={500}
          width={500}
        />
      </div>
    );
  }