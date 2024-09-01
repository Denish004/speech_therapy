import React from 'react';

import Lottie from 'react-lottie';
import animationData from './bg.json';

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
          height={1000}
        />
      </div>
    );
  }