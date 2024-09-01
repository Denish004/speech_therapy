import React, { useState } from "react";
import styled from "styled-components";
import Signin_lottie from '../lotties/bg1'

const Form = () => {
  const [formType, setFormType] = useState("patient"); // Default to 'patient'

  return (
    <>
      <div style={{position:'absolute', top:'0', left:'0', width:'100%', height:'100%', zIndex:'-1'}}>
        <Signin_lottie/>
      </div>

      <StyledWrapper>
        <form className="form">
          <div className="title">
            {formType === "patient" ? "Patient Registration" : "Therapist Registration"}
          </div>

          <div className="toggle-container">
            <label className="switch">
              <input
                type="checkbox"
                className="toggle"
                checked={formType === "therapist"}
                onChange={() => setFormType(formType === "patient" ? "therapist" : "patient")}
              />
              <span className="slider" style={{marginRight:'18px'}}></span>
              <span className="label" style={{paddingRight:'137px'}}>Patient</span>
              <span className="label pl-5">Therapist</span>
            </label>
          </div>

          <div className="form-fields">
            {formType === "patient" ? (
              <>
                <input className="input" name="name" placeholder="Name" type="text" required />
                <input className="input" name="age" placeholder="Age" type="number" required />
                <input className="input" name="speech_disorder" placeholder="Speech Disorder" type="text" required />
                <input className="input" name="severity" placeholder="Severity" type="text" required />
                <input className="input" name="preferred_languages" placeholder="Preferred Languages" type="text" required />
                <input className="input" name="location" placeholder="Location" type="text" required />
                <input className="input" name="insurance_provider" placeholder="Insurance Provider" type="text" required />
                <input className="input" name="budget" placeholder="Budget" type="number" required />
                <input className="input" name="gender_preference" placeholder="Gender Preference" type="text" required />
                <input className="input" name="cultural_background" placeholder="Cultural Background" type="text" required />
                <input className="input" name="availability" placeholder="Availability" type="text" required />
              </>
            ) : (
              <>
                <input className="input" name="name" placeholder="Name" type="text" required />
                <input className="input" name="specializations" placeholder="Specializations" type="text" required />
                <input className="input" name="age_groups" placeholder="Age Groups" type="text" required />
                <input className="input" name="therapeutic_approaches" placeholder="Therapeutic Approaches" type="text" required />
                <input className="input" name="languages" placeholder="Languages" type="text" required />
                <input className="input" name="location" placeholder="Location" type="text" required />
                <input className="input" name="availability" placeholder="Availability" type="text" required />
                <input className="input" name="insurance_accepted" placeholder="Insurance Accepted" type="text" required />
                <input className="input" name="session_cost" placeholder="Session Cost" type="number" required />
                <input className="input" name="gender" placeholder="Gender" type="text" required />
              </>
            )}
          </div>

          <button className="button-confirm" type="submit">Submit</button>
        </form>
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  .form {
    --input-focus: #2d8cf0;
    --font-color: #323232;
    --font-color-sub: #666;
    --bg-color: beige;
    --main-color: black;
    padding: 20px;
    background: lightblue;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center-align form content */
    gap: 20px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    width: 80%;
    margin: 50px auto;
  }

  .title {
    color: var(--font-color);
    font-weight: 900;
    font-size: 20px;
    margin-bottom: 15px;
    text-align: center; /* Center-align title text */
  }

  .toggle-container {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .switch {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 25px;
  }

  .switch .toggle {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .switch .slider {
    position: absolute;
    cursor: pointer;
    background-color: var(--bg-color);
    border: 2px solid var(--main-color);
    border-radius: 25px;
    transition: 0.3s;
    width: 60px;
    height: 25px;
  }

  .switch .slider:before {
    content: "";
    position: absolute;
    border-radius: 50%;
    background-color: var(--main-color);
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2px;
    transition: 0.3s;
  }

  .toggle:checked + .slider {
    background-color: var(--input-focus);
  }

  .toggle:checked + .slider:before {
    transform: translateX(35px);
  }

  .label {
    position: absolute;
    font-weight: 600;
    color: var(--font-color);
  }

  .label:first-of-type {
    left: -60px;
  }

  .label:last-of-type {
    right: -60px;
  }

  .form-fields {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center; /* Center-align form fields */
  }

  .input {
    width: calc(50% - 15px);
    height: 40px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 15px;
    font-weight: 600;
    color: var(--font-color);
    padding: 5px 10px;
    outline: none;
  }

  .input::placeholder {
    color: var(--font-color-sub);
    opacity: 0.8;
  }

  .input:focus {
    border: 2px solid var(--input-focus);
  }

  .button-confirm {
    width: 120px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 17px;
    font-weight: 600;
    color: var(--font-color);
    cursor: pointer;
    margin-top: 20px;
    align-self: center; /* Center-align button */
  }
`;

export default Form;
