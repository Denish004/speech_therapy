import React from "react";
import styled from "styled-components";

const testimonials = [
  { name: 'John Doe', feedback: 'This software has streamlined our therapy process and made case management so much easier!', role: 'Therapist' },
  { name: 'Jane Smith', feedback: 'I love how easy it is to track therapy progress and receive feedback from my supervisor.', role: 'Therapist' },
  { name: 'Emily Brown', feedback: 'As a supervisor, I can efficiently manage multiple cases and provide prompt feedback.', role: 'Supervisor' },
];

const Testimonial = () => {
  return (
    <StyledWrapper>
      <h2 className="title m-2">What People Are Saying</h2>
      <div className="testimonials mb-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="card">
            <div className="content">
              <div className="name-role">
                <h3 className="name">{testimonial.name}</h3>
                <p className="role">{testimonial.role}</p>
              </div>
              <p className="feedback">"{testimonial.feedback}"</p>
            </div>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .title {
    text-align: center;
    font-size: 2rem;
    color: #6b46c1; /* Shade of purple */
    margin-bottom: 2rem;
  }

  .testimonials {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 0 2rem;
  }

  .card {
    position: relative;
    overflow: hidden;
    background: #faf5ff; /* Light purple shade */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    cursor: pointer;
    height: 100%;
    min-height: 320px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  .content {
    text-align: center;
    transition: transform 0.5s ease;
  }

  .name-role {
    transition: opacity 0.5s ease;
  }

  .name {
    font-size: 1.5rem;
    font-weight: bold;
    color: #4c51bf; /* A deeper, elegant purple */
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
  }

  .role {
    font-size: 1rem;
    color: #a0aec0; /* Softer gray for contrast */
  }

  .feedback {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.2rem;
    color: #7c3aed; /* Deeper shade of purple */
    text-align: center;
    opacity: 0;
    transition: opacity 0.5s ease;
    padding: 0 1rem;
  }

  .card:hover .name-role {
    opacity: 0;
  }

  .card:hover .feedback {
    opacity: 1;
  }
`;

export default Testimonial;
