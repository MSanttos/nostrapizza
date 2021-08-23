import React from "react";
import sadness from "../assets/sadness.png";
function About() {
  return (
    <div className="cart">
      <div className="aboutBottom">
        <h1> Seu carrinho está vazio! </h1>
        <img src={sadness} alt="Cart" style={{width: "16%", height: "16%"}}/>
      </div>
    </div>
  );
}

export default About;
