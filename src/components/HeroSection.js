import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import PhoneIcon from "@material-ui/icons/Phone";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/vid-1.mp4" autoPlay loop muted />
      <h2>Southwest Car Wash Services</h2>
      {/* <p>Contact Us Today!</p> */}
      <div className="hero-btns">
        {/* <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Contact Us Today
          <PhoneIcon fontSize="large" />
        </Button> */}
        <Link to="/contact-us" className="btn-mobile">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Contact Us Today
            <PhoneIcon fontSize="large" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
