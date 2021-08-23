import React, { useState } from "react";
import Logo from "../assets/pizzaLogo.png";
import bag from "../assets/bag.jpg";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import Badge from "@material-ui/core/Badge";

import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="Logo"/>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> Sobre </Link>
          <Link to="/contact"> Contato </Link>
          {/* <Link to="/count">Contador</Link> */}
          <Link to="/cart"> <Badge color="secondary"></Badge><img src={bag} alt="bag" style={{width: '10%'}}/> </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> Sobre </Link>
        <Link to="/contact"> Contato </Link>
        {/* <Link to="/count">Contador</Link> */}
        <Link to="/cart"> <img src={bag} alt="bag" style={{width: '10%'}} /> </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
