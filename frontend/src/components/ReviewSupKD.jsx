import styled from "styled-components";


const ReviewSup=()=>{
    return(
        /* From Uiverse.io by dylanharriscameron */
    <StyledWrapper>   

        <div style={{margin:40}}><div class="card">
        <div class="bg" style={{display:"flex"}}>
            <div style={{alignContent:"center",marginLeft:90,marginTop:30}}>
                <div><img src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png" style={{width:150,height:150}}/>
                            <strong style={{fontSize:30,marginLeft:20}}>Patient</strong></div>
                            
                <div><img src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png" style={{width:150,height:150}}/>
                            <strong style={{fontSize:30}}>Therapist</strong></div>
            </div>
            <div style={{marginLeft:120,margin:50}}>
                <h1 style={{fontFamily:"sans-serif",fontSize:30,fontWeight:"bold"}}>Session 1</h1>
                <hr style={{height:28}}/>
                <div style={{ display: "flex", alignItems: "center" }}>
    <label class="container">
        <input type="checkbox" checked="checked" />
        <div class="checkmark"></div>
    </label>
    <h1 style={{ margin: "0 0 0 10px", fontSize: "20px" }}>Analysis</h1>
</div>
                <div style={{ display: "flex", alignItems: "center" ,marginTop:15}}>
    <label class="container">
        <input type="checkbox" checked="checked" />
        <div class="checkmark"></div>
    </label>
    <h1 style={{ margin: "0 0 0 10px", fontSize: "20px" }}>Analysis</h1>
</div>
                
            </div>
            <div style={{marginLeft:120,margin:50}}>
                <h1 style={{fontFamily:"sans-serif",fontSize:30,fontWeight:"bold"}}>Session 2</h1>
                <hr style={{height:28}}/>
                <div style={{ display: "flex", alignItems: "center" }}>
    <label class="container">
        <input type="checkbox" checked="checked" />
        <div class="checkmark"></div>
    </label>
    <h1 style={{ margin: "0 0 0 10px", fontSize: "20px" }}>Analysis</h1>
</div>
                <div style={{ display: "flex", alignItems: "center" ,marginTop:15}}>
    <label class="container">
        <input type="checkbox" checked="checked" />
        <div class="checkmark"></div>
    </label>
    <h1 style={{ margin: "0 0 0 10px", fontSize: "20px" }}>Analysis</h1>
</div>
                
            </div>
                            


        

        </div>
        <div class="blob"></div>
        </div></div>     
        
    </StyledWrapper>

    )
}
export default ReviewSup
const StyledWrapper = styled.div`
/* From Uiverse.io by dylanharriscameron */ 
.card {
  position: relative;
  width: 1370px;
  height: 460px;
  border-radius: 14px;
  z-index: 1111;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  ;
}

.bg {
//   position: absolute;
  top: 5px;
  left: 5px;
  width: 1350px;
  height: 440px;
  z-index: 2;
  background: rgb(195 190 228);
  backdrop-filter: blur(24px);
  border-radius: 10px;
  overflow: hidden;
  outline: 2px solid white;
}

.blob {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 1310px;
  height: 350px;
  border-radius: 50%;
  background-color: #524798;
  opacity: 1;
  filter: blur(12px);
  animation: blob-bounce 5s infinite ease;
}

@keyframes blob-bounce {
  0% {
    transform: translate(-100%, -100%) translate3d(0, 0, 0);
  }

  25% {
    transform: translate(-100%, -100%) translate3d(100%, 0, 0);
  }

  50% {
    transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
  }

  75% {
    transform: translate(-100%, -100%) translate3d(0, 100%, 0);
  }

  100% {
    transform: translate(-100%, -100%) translate3d(0, 0, 0);
  }
}
/* From Uiverse.io by shivesh315 */ 
/* Hide the default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.container {
//   display: block;
  position: relative;
  cursor: pointer;
  font-size: 25px;
  user-select: none;
}

/* Create a custom checkbox */
.checkmark {
  position: relative;
  top: 0;
  left: 0;
  height: 1.3em;
  width: 1.3em;
  background: black;
  border-radius: 50px;
  transition: all 0.7s;
  --spread: 6px;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background: rgb(0, 0, 0);
  box-shadow: -2px -2px var(--spread) 0px #5b51d8,
    0 -2px var(--spread) 0px #833ab4, 2px -2px var(--spread) 0px #e1306c,
    2px 0 var(--spread) 0px #fd1d1d, 2px 2px var(--spread) 0px #f77737,
    0 2px var(--spread) 0px #fcaf45, -2px 2px var(--spread) 0px #ffdc80;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 0.45em;
  top: 0.25em;
  width: 0.25em;
  height: 0.5em;
  border: solid #f0f0f0;
  border-width: 0 0.15em 0.15em 0;
  transform: rotate(40deg);
}

`