// import styled from "styled-components";

// const ReviewInput=()=>{
//     /* From Uiverse.io by themrsami */ 
//     return(
//         <StyledWrapper>
// <div class="h-96 flex items-center justify-center mt-10">
//   <div class="relative">
//     <div class="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg animate-pulse w-150" style={{width:1370}}></div>
//     <div id="form-container" class="bg-white p-16 rounded-lg shadow-2xl w-80 relative z-10 transform transition duration-500 ease-in-out" style={{width:1350}}>
//       <div class="brutalist-container">
//   <input
//     placeholder="TYPE HERE"
//     class="brutalist-input smooth-type"
//     type="text"
//   />
 

// </div>
// <div class="rating">
//   <input value="5" name="rating" id="star5" type="radio"/>
//   <label for="star5"></label>
//   <input value="4" name="rating" id="star4" type="radio"/>
//   <label for="star4"></label>
//   <input value="3" name="rating" id="star3" type="radio"/>
//   <label for="star3"></label>
//   <input value="2" name="rating" id="star2" type="radio"/>
//   <label for="star2"></label>
//   <input value="1" name="rating" id="star1" type="radio"/>
//   <label for="star1"></label>
// </div>
//     </div>
//   </div>
// </div>
// </StyledWrapper>
//     )

// }
// export default ReviewInput;
// const StyledWrapper = styled.div`
// .brutalist-container {
//   position: relative;
//   width: 1220px;
//   font-family: monospace;
//   }
  
//   .brutalist-input {
//     height: 300px;
//   width: 100%;
//   padding: 15px;
//   font-size: 18px;
//   font-weight: bold;
//   color: #000;
//   background-color: #fff;
//   border: 4px solid #000;
//   position: relative;
//   overflow: hidden;
//   border-radius: 0;
//   outline: none;
//   transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
//   box-shadow: 5px 5px 0 #000, 10px 10px 0 #524798;
// }

// .rating {
//   display: inline-block;
// }

// // .rating input {
// //   display: none;
// // }

// .rating label {
//   float: right;
//   cursor: pointer;
//   color: #ccc;
//   transition: color 0.3s;
// }

// .rating label:before {

//   font-size: 30px;
// }
// .rating label:before {
//   content: '\2605';
//   font-size: 30px;
// }
// .rating input:checked ~ label,
// .rating label:hover,
// .rating label:hover ~ label {
//   color: #6f00ff;
//   transition: color 0.3s;
// }


// `

import styled from "styled-components";
import ReviewLottie from "../lotties/review";

const ReviewInput = () => {
  return (
    <StyledWrapper>
      <div className="h-96 flex items-center justify-center mt-10">
        <div className="relative">
          <div
            className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg animate-pulse w-150"
            style={{ width: 1370 }}
          ></div>
          <div
            id="form-container"
            className="bg-white  rounded-lg shadow-2xl w-80 relative z-10 transform transition duration-500 ease-in-out"
            style={{ width: 1350 ,display:"flex"}}
          >
            <div style={{margin:30}}><div className="brutalist-container">
              <input
                placeholder="TYPE HERE"
                className="brutalist-input smooth-type"
                type="text"
              />
            </div>
            <div style={{display:'flex'}}>
                <div className="rating" style={{marginTop:20}}>
              <input value="5" name="rating" id="star5" type="radio" />
              <label htmlFor="star5"></label>
              <input value="4" name="rating" id="star4" type="radio" />
              <label htmlFor="star4"></label>
              <input value="3" name="rating" id="star3" type="radio" />
              <label htmlFor="star3"></label>
              <input value="2" name="rating" id="star2" type="radio" />
              <label htmlFor="star2"></label>
              <input value="1" name="rating" id="star1" type="radio" />
              <label htmlFor="star1"></label>
                </div>
                
<button class="cssbuttons-io-button" style={{marginTop:15,marginLeft:100}}>
  Submit
  <div class="icon">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>

            </div></div>
            <div style={{}}> <ReviewLottie/></div>
                   

          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default ReviewInput;

const StyledWrapper = styled.div`
  .brutalist-container {
    position: relative;
    width: 820px;
    font-family: monospace;
  }

  .brutalist-input {
    height: 300px;
    width: 100%;
    padding: 15px;
    font-size: 18px;
    font-weight: bold;
    color: #000;
    background-color: #fff;
    border: 4px solid #000;
    position: relative;
    overflow: hidden;
    border-radius: 0;
    outline: none;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 5px 5px 0 #000, 10px 10px 0 #524798;
  }

  .rating {
    display: inline-block;
  }

  .rating input {
    display: none;
  }

  .rating label {
    float: right;
    cursor: pointer;
    color: #ccc;
    transition: color 0.3s;
  }

  .rating label:before {
    content: "★"; /* Star character */
    font-size: 30px;
    display: inline-block;
  }

  .rating input:checked ~ label,
  .rating label:hover,
  .rating label:hover ~ label {
    color: #6f00ff;
    transition: color 0.3s;
  }
    /* From Uiverse.io by adamgiebl */ 
.cssbuttons-io-button {
  background: #a370f0;
  color: white;
  font-family: inherit;
  padding: 0.35em;
  padding-left: 1.2em;
  font-size: 17px;
  font-weight: 500;
  border-radius: 0.9em;
  border: none;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  box-shadow: inset 0 0 1.6em -0.6em #714da6;
  overflow: hidden;
  position: relative;
  height: 2.8em;
  padding-right: 3.3em;
  cursor: pointer;
}

.cssbuttons-io-button .icon {
  background: white;
  margin-left: 1em;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 2.2em;
  border-radius: 0.7em;
  box-shadow: 0.1em 0.1em 0.6em 0.2em #7b52b9;
  right: 0.3em;
  transition: all 0.3s;
}

.cssbuttons-io-button:hover .icon {
  width: calc(100% - 0.6em);
}

.cssbuttons-io-button .icon svg {
  width: 1.1em;
  transition: transform 0.3s;
  color: #7b52b9;
}

.cssbuttons-io-button:hover .icon svg {
  transform: translateX(0.1em);
}

.cssbuttons-io-button:active .icon {
  transform: scale(0.95);
}

`;