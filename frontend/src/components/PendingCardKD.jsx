import React from "react";
import styled from "styled-components";

const PendingCard=()=>{
    return(
        /* From Uiverse.io by Samucraft346 */ 
        <StyledWrapper>
            <div style={{marginTop:30}}><div class="card1">
  <div class="card2">

    <div class="card">
  <div class="container">
    <div class="left">
      <div class="status-ind"></div>
    </div>
    <div class="right">
      <div class="text-wrap">
        <p class="text-content">
          <a class="text-link" href="#">Jane Doe</a> invited you to review the
          <a class="text-link" href="#">therapy</a> session.
        </p>
        <p class="time">2 hours ago</p>
      </div>
      <div class="button-wrap">
        <button class="primary-cta">View file</button>
        <button class="secondary-cta">Mark as read</button>
      </div>
    </div>
  </div>
</div>
    <div class="card">
  <div class="container">
    <div class="left">
      <div class="status-ind"></div>
    </div>
    <div class="right">
      <div class="text-wrap">
        <p class="text-content">
          <a class="text-link" href="#">Alex Perry</a> invited you to review the
          <a class="text-link" href="#">therapy</a> session.
        </p>
        <p class="time">2 hours ago</p>
      </div>
      <div class="button-wrap">
        <button class="primary-cta">View file</button>
        <button class="secondary-cta">Mark as read</button>
      </div>
    </div>
  </div>
</div>

  </div>
</div></div>

</StyledWrapper>

    )
}
const StyledWrapper = styled.div`
/* From Uiverse.io by Samucraft346 */ 
.card1{
  width: 325px;
  height: 479px;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  border-radius: 20px;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card2 {
  width: 305px;
  height: 460px;
  background-color: #1a1a1a;
  border-radius: ;
  transition: all 0.2s;
  border-radius: 20px;
}
  /* From Uiverse.io by anniekoop */ 
.card {
  margin: 10px;
  width: fit-content;
  background-color: #f2f3f7;
  border-radius: 0.75em;
  cursor: pointer;
  transition: ease 0.2s;
//   box-shadow: 1em 1em 1em #d8dae0b1, -0.75em -0.75em 1em #ffffff;
  border: 1.5px solid #f2f3f7;
}

.card:hover {
  background-color: #d3ddf1;
  border: 1.5px solid #1677ff;
}

.container {
  margin-top: 1.25em;
  margin-bottom: 1.375em;
  margin-left: 1.375em;
  margin-right: 2em;
  display: flex;
  flex-direction: row;
  gap: 0.75em;
}

.status-ind {
  width: 0.625em;
  height: 0.625em;
  background-color: #ff0000;
  margin: 0.375em 0;
  border-radius: 0.5em;
}

.text-wrap {
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  color: #333;
}

.time {
  font-size: 0.875em;
  color: #777;
}

.text-link {
  font-weight: 500;
  text-decoration: none;
  color: black;
}

.button-wrap {
  display: flex;
  flex-direction: row;
  gap: 1em;
  align-items: center;
}

.secondary-cta {
  background-color: transparent;
  border: none;
  font-size: 15px;
  font-weight: 400;
  color: #666;
  cursor: pointer;
}

.primary-cta {
  font-size: 15px;
  background-color: transparent;
  font-weight: 600;
  color: #1677ff;
  border: none;
  border-radius: 1.5em;
  cursor: pointer;
}

button:hover {
  text-decoration: underline;
}

.right {
  display: flex;
  flex-direction: column;
  gap: 0.875em;
}

`
export default PendingCard