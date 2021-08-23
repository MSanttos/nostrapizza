import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import pepperoni from "../assets/pepperoni.jpg";
import sadness from "../assets/sadness.png";

export default function App() {
const [itemCount, setItemCount] = React.useState(0);

return (
	<div style={{ display: "block", padding: 30 }}>
    {/* <h4>Você ainda não adicionou um pedido ao seu carrinho!</h4>
    <img src={pepperoni} alt="pepperoni" style={{width: "21%"}}/>
	<div>
		<Badge color="secondary" badgeContent={itemCount}>
		<ShoppingCartIcon />{" "}
		</Badge>
		<ButtonGroup>
		<Button
			onClick={() => {
			setItemCount(Math.max(itemCount - 1, 0));
			}}
		>
			{" "}
			<RemoveIcon fontSize="small" />
		</Button>
		<Button
			onClick={() => {
			setItemCount(itemCount + 1);
			}}
		>
			{" "}
			<AddIcon fontSize="small" />
		</Button>
		</ButtonGroup>
	</div> */}
	
        <h1 style={{textAlign: 'center'}}> Error 404 Not Found </h1>
        <img src={sadness} alt="Cart" style={{width: "16%", height: "16%",display: "block", margin: "0 auto"}}/>
	</div>
);
}
