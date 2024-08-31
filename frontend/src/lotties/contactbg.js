import React from 'react';

import Lottie from 'react-lottie';
import animationData from './contactbg.json';

export default function ContactLottie() {
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
          height={1800} width={2300} 
        />
      </div>
    );
  }