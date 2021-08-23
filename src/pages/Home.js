import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> La Nostra Pizza </h1>
        <p> LA MIGLIORE PIZZA STILE CUCINA ITALIANA</p>
        <Link to="/menu">
          <button> Faça seu pedido! </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
