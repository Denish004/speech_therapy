// import React from 'react'
// // import { Card } from "flowbite-react";

// const  PatientCard = () => {
//   return (
   

// <div class="w-full h-48 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
//     <div className='flex'>

//     <div class="relative w-24 h-24 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 m-9">
//     <svg class="absolute w-28 h-28 text-gray-400 -left-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//         <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
//     </svg>
// </div>



// <div>


//     <a href="#">
//         <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
//     </a>
//     <div class="p-5">
//         <a href="#">
//             <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Welcome Patient Name</h5>
//         </a>
//         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//         <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//             Read more
//              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//             </svg>
//         </a>
//     </div>
//     </div>
//     </div>
// </div>

//   )
// }

// export default PatientCard;

import React from "react";
import styled from "styled-components";
import PatientCardLottie from "../lotties/PatientCardLottieDS";
import paitentAvatarDS from "../assets/patientAvatarDS.png"
import GaugeChartDS from "./ChartsDS/GaugeChartDS";
import { useAuthContext } from "../hooks/useAuthContext";

const PatientCardDS = () => {
  // const {user} = useAuthContext();
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;
  const name = user?.name; 
  return (
    <div >
      <div className="absolute w-full -z-50">
      <svg   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 510" preserveAspectRatio="xMidYMid">
  <defs>
    <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#fff0bb"/>
      <stop offset="0.5" stop-color="#ff8ad8"/>
      <stop offset="1" stop-color="#ff00ff"/>
    </linearGradient>
  </defs>
  <g transform="rotate(180 640 275.5)">
    <rect fill="white" height="551" width="1280" y="0" x="0"/>
    <path id="wave1" fill-opacity="0.7" fill="url(#waveGradient)">
      <animate 
        attributeName="d"
        dur="7s"
        repeatCount="indefinite"
        values="
          M0 551L0 351C213 311 427 271 640 291C853 311 1067 391 1280 431L1280 551Z;
          M0 551L0 391C213 431 427 471 640 451C853 431 1067 351 1280 311L1280 551Z;
          M0 551L0 351C213 311 427 271 640 291C853 311 1067 391 1280 431L1280 551Z"
        calcMode="spline"
        keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
      />
    </path>
    <path id="wave2" fill-opacity="0.5" fill="url(#waveGradient)">
      <animate 
        attributeName="d"
        dur="5s"
        repeatCount="indefinite"
        values="
          M0 551L0 401C213 441 427 481 640 461C853 441 1067 361 1280 321L1280 551Z;
          M0 551L0 441C213 401 427 361 640 381C853 401 1067 481 1280 521L1280 551Z;
          M0 551L0 401C213 441 427 481 640 461C853 441 1067 361 1280 321L1280 551Z"
        calcMode="spline"
        keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
      />
    </path>
    <path id="wave3" fill-opacity="0.3" fill="url(#waveGradient)">
      <animate 
        attributeName="d"
        dur="3s"
        repeatCount="indefinite"
        values="
          M0 551L0 451C213 491 427 531 640 511C853 491 1067 411 1280 371L1280 551Z;
          M0 551L0 491C213 451 427 411 640 431C853 451 1067 531 1280 571L1280 551Z;
          M0 551L0 451C213 491 427 531 640 511C853 491 1067 411 1280 371L1280 551Z"
        calcMode="spline"
        keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
      />
    </path>
  </g>
</svg>
    </div>
   <div className="flex justify-center py-10" >
    <StyledWrapper className="w-3/4  ">
      <div className="card ">
        <div className="card-info">
        <div className='flex justify-evenly'>

            <div class="relative w-40 h-40 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 m-9">
            <img src={paitentAvatarDS} alt="Logo" ></img>;
            </div>



            <div>
            <div class="p-5">
                
                    <h5 class="mb-2 ml-9 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Welcome {name}</h5>
              
                <GaugeChartDS/>
                <a href="#" class="inline-flex items-center px-3 py-2 mb-5 ml-20 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     More Details
                      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
            </div>
     </div>
     </div>
     </div>
    </StyledWrapper>
    </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  .card {
  --background: linear-gradient(to right, #461299 0%, #acb6e5 100%);
  width: full;
  height: 254px;
  padding: 5px;
  border-radius: 1rem;
  overflow: visible;
  background: #fff0bb;
  background: var(--background);
  position: relative;
  z-index: 1;
}

.card::before,
.card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  z-index: -1;
}

.card::before {
  background: linear-gradient(to bottom right, #f5c327 0%, #fda085 100%);
  transform: rotate(0.7deg);
}

.card::after {
  background: linear-gradient(to top right, #3bed7e 0%,#87d8ff 100%);
  transform: rotate(-0.7deg);
}

.card-info {
  --color: white;
  background: var(--color);
  color: var(--color);
 

  width: 100%;
  height: 100%;
  overflow: visible;
  border-radius: 0.7rem;
  position: relative;
  z-index: 2;
}

.card .title {
  font-weight: bold;
  letter-spacing: 0.1em;
}

.card:hover::before,
.card:hover::after {
  opacity: 0;
}

.card:hover .card-info {
  color: #74ebd5;
  transition: color 1s;
}

`;

export default PatientCardDS;
