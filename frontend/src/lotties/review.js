import Lottie from "react-lottie";
import animationData from "./review.json";

import React from "react";

export default function ReviewLottie() {
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