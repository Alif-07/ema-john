import React from 'react';
import './Cart.css';

const Cart = (props) => {
	// console.log(props);
	const { cart } = props;
	let cartPrice, shippingCost;
	for (const c of cart) {
		cartPrice = c.price;
		shippingCost = c.shipping;
	}

	let total = 0;
	for (const product of cart) {
		total = total + product.price;
	}
	return (
		<div>
			<h4>Order Summary</h4>
			<h5>Items ordered: {props.cart.length}</h5>
			<p>Item: {cartPrice}</p>
			<p>Shipping & Handling: {shippingCost}</p>
			<h5>Total: {total}</h5>
		</div>
	);
};

export default Cart;
