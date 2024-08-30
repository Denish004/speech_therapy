import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-container">
        <div className="brand">
          <h2>TheraSpeech</h2>
          <p>Making Speech Therapy Accessible</p>
        </div>
        <div className="links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
        <div className="social-icons">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 TheraSpeech. All rights reserved.</p>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: #2e2b5f;
  color: #f9f8f0;
  font-family: "Comic Sans MS", "Comic Sans", cursive;

  .footer-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem;
    flex-wrap: wrap;
  }

  .brand {
    text-align: center;

    h2 {
      font-size: 2rem;
      margin-bottom: 0.5rem;
      color: #d4a5f4;
    }

    p {
      font-size: 1rem;
      color: #f9f8f0;
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      color: #f9f8f0;
      margin-bottom: 0.5rem;
      font-size: 1rem;
      transition: color 0.3s ease;

      &:hover {
        color: #d4a5f4;
      }
    }
  }

  .social-icons {
    display: flex;
    justify-content: center;

    a {
      color: #f9f8f0;
      font-size: 1.5rem;
      margin: 0 0.5rem;
      transition: color 0.3s ease;

      &:hover {
        color: #d4a5f4;
      }
    }
  }

  .footer-bottom {
    background-color: #201f4e;
    text-align: center;
    padding: 1rem;
    margin-top: 1rem;

    p {
      margin: 0;
      font-size: 0.9rem;
    }
  }
`;

export default Footer;
