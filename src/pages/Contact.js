import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contato</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Nome completo</label>
          <input name="name" placeholder="Digite seu nome..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Digite email..." type="email" />
          <label htmlFor="message">Messagem</label>
          <textarea
            rows="6"
            placeholder="Digite message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
