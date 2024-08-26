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

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-info">
        <div className='flex'>

     <div class="relative w-40 h-40 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 m-9">
     <svg class="absolute w-40 h-40 text-gray-400 -left" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
     </svg>
 </div>



 <div>


     <a href="#">
         <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
     </a>
     <div class="p-5">
        <a href="#">
             <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Welcome Patient Name</h5>
         </a>
         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
         <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
             Read more
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
  );
};

const StyledWrapper = styled.div`
  .card {
  --background: linear-gradient(to right, #74ebd5 0%, #acb6e5 100%);
  width: full;
  height: 254px;
  padding: 5px;
  border-radius: 1rem;
  overflow: visible;
  background: #74ebd5;
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
  background: linear-gradient(to bottom right, #f6d365 0%, #fda085 100%);
  transform: rotate(0.5deg);
}

.card::after {
  background: linear-gradient(to top right, #84fab0 0%, #8fd3f4 100%);
  transform: rotate(-0.5deg);
}

.card-info {
  --color: white;
  background: var(--color);
  color: var(--color);
  display: flex;
  justify-content: center;
  align-items: center;
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

export default Card;
