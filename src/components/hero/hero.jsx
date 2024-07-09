import React from "react";
import heroImage from "../../assets/Rectangle 4200.jpg";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-el">
        <img className="hero-image" src={heroImage} />
        <h1>Bridal Headgears</h1>
        <h2>SHOP THE DROP</h2>
      </div>
    </div>
  );
};

export default Hero;
