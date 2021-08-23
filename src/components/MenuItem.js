import React from "react";
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import "../styles/DisplayCart.css"



function MenuItem({ image, name, price }) {

  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h3 style={{textAlign: 'center'}}> {name} </h3>
      <div className="DisplayCart">
        {/* <p> R${price} </p> */}
        <IconButton color="primary" aria-label="add to shopping cart">
          <Link to="/count"> <AddShoppingCartIcon style={{width: "110%", color: "#fff"}}/> </Link>
        </IconButton>
      </div>
    </div>
  );
}

export default MenuItem;
