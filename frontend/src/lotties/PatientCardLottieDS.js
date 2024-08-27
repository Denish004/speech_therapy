import Lottie from "react-lottie";
import animationData from "./PatientCardDS.json";

import React from "react";

export default function PatientCardLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
   
<Lottie options={defaultOptions} height={400} />
  
  
  );
}