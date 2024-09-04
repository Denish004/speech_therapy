import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from 'react-router-dom';

const TherapistForm = () => {
  const [weeks, setWeeks] = useState(1);
  const [titles, setTitles] = useState({});
  const [startDate, setStartDate] = useState("");
  const [patientId, setPatientId] = useState("");
  const { id } = useParams();
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;
  const therapistId = user?._id;
 
  console.log("1")

  const handleWeeksChange = (e) => {
    const selectedWeeks = parseInt(e.target.value, 10);
    setWeeks(selectedWeeks);
    setTitles({});
  };
  console.log("2")
  const handleTitleChange = (week, title) => {
    setTitles((prevTitles) => ({
      ...prevTitles,
      [week]: title,
    }));
  };
  console.log("3")
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare therapyTitles array
    const therapyTitles = Object.keys(titles).map((week) => ({
      week: parseInt(week, 10),
      title: titles[week],
    }));

    const data = {
      patientId:id,
      therapyStartDate: startDate,
      numberOfWeeks: weeks,
      therapyTitles,
      TherapistId:therapistId, // replace with therapist from context
    };
    console.log("4")
    try {
      const response = await fetch("http://localhost:8080/api/sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Session created successfully:", result);
        // Optionally, reset the form after successful submission
        setPatientId("");
        setStartDate("");
        setWeeks(1);
        setTitles({});
      } else {
        console.error("Failed to create session:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
console.log(5)
  return (
    <StyledWrapper>
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="form_area" style={{ width: "500px" }}>
          <p className="title">Therapist Form</p>
          <form style={{ width: "300px" }} onSubmit={handleSubmit}>
            <div className="form_group">
              <label className="sub_title" htmlFor="patientId">
                Patient ID
              </label>
              <input
                placeholder="Patient ID"
                className="form_style"
                type="text"
                value={id}
                onChange={(e) => setPatientId(e.target.value)}
                required
              />
            </div>

            <div className="form_group">
              <label className="sub_title" htmlFor="start-date">
                Therapy Start Date
              </label>
              <input
                id="start-date"
                className="form_style"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />

              <label className="sub_title" htmlFor="weeks">
                Number of Therapy Weeks
              </label>
              <select
                id="weeks"
                className="form_style"
                value={weeks}
                onChange={handleWeeksChange}
                required
              >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((week) => (
                  <option key={week} value={week}>
                    {week} week{week > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>
            {Array.from({ length: weeks }, (_, i) => i + 1).map((week) => (
              <div key={week} className="form_group">
                <label className="sub_title" htmlFor={`week-${week}`}>
                  Therapy Title for Week {week}
                </label>
                <input
                  placeholder={`Enter focus for week ${week}`}
                  id={`week-${week}`}
                  className="form_style"
                  type="text"
                  value={titles[week] || ""}
                  onChange={(e) => handleTitleChange(week, e.target.value)}
                  required
                />
              </div>
            ))}
            <div>
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  .form_area {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #eddcd9;
    height: auto;
    width: auto;
    border: 2px solid #264143;
    border-radius: 20px;
    box-shadow: 3px 4px 0px 1px #e99f4c;
  }

  .title {
    color: #264143;
    font-weight: 900;
    font-size: 1.5em;
    margin-top: 20px;
  }

  .sub_title {
    font-weight: 600;
    margin: 5px 0;
  }

  .form_group {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin: 10px;
  }

  .form_style {
    outline: none;
    border: 2px solid #264143;
    box-shadow: 3px 4px 0px 1px #e99f4c;
    width: 290px;
    padding: 12px 10px;
    border-radius: 4px;
    font-size: 15px;
  }

  .form_style:focus,
  .btn:focus {
    transform: translateY(4px);
    box-shadow: 1px 2px 0px 0px #e99f4c;
  }

  .btn {
    padding: 15px;
    margin: 25px 0px;
    width: 290px;
    font-size: 15px;
    background: #de5499;
    border-radius: 10px;
    font-weight: 800;
    box-shadow: 3px 3px 0px 0px #e99f4c;
    color: white;
    border: none;
  }

  .btn:hover {
    opacity: 0.9;
    cursor: pointer;
  }

  .link {
    font-weight: 800;
    color: #264143;
    padding: 5px;
  }
`;

export default TherapistForm;
