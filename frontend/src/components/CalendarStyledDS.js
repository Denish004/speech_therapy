import React from 'react'
import CalendarDS from './CalendarDS'
import styled from "styled-components";

function CalendarStyledDS() {
  return (
    <StyledWrapper>
    <div className='calendar'><CalendarDS/></div>
    </StyledWrapper>
  )
}
const StyledWrapper = styled.div`
  .calendar {
  box-sizing: border-box;
  width: 550px;
  height: 350px;
 
  border: 1px solid white;
  box-shadow: 12px 17px 51px rgba(161, 62, 184, 0.22);
 
 
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;

  user-select: none;
  font-weight: bolder;
  color: purple;
}

.calendar:hover {
  border: 1px solid purple;
  transform: scale(1.05);
}


`;

export default CalendarStyledDS