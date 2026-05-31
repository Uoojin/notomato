import React from "react";
import bg from "../img/bg.png";
import icon1 from "../img/icon1.png";
import icon2 from "../img/icon2.png";
import icon3 from "../img/icon3.png";
import icon4 from "../img/icon4.png";
import logo from "../img/logo.png";
import notomatoPhone from "../img/notomatoPhone.png";

function HeroSection() {
  return (
    <section className="hero section-full" id="hero">
      <div className="hero-stage">
        <h1 className="hero-word">
          <img src={logo} alt="notomato" />
        </h1>
        <img className="hero-bg" src={bg} alt="" />
        <img className="hero-phone" src={notomatoPhone} alt="notomato app mockup" />
        <img className="float-icon float-purple" src={icon2} alt="" />
        <img className="float-icon float-yellow" src={icon1} alt="" />
        <img className="float-icon float-mint" src={icon4} alt="" />
        <img className="float-icon float-pink" src={icon3} alt="" />
      </div>
    </section>
  );
}

export default HeroSection;
