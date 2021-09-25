import React from 'react';
import './Cart.css';
const Cart = (props) => {
	// console.log(props);
	const { cart } = props;
	// const totalReducer = (prev, product) => prev + product.price;
	// const total = cart.reduce(totalReducer, 0);
	let total = 0;
	let price = 0;
	for (const product of cart) {
		total = total + product.price;
		price = product.price;
	}
	const shipping = total > 0 ? 15 : 0;
	const tax = (total + shipping) * 0.1;
	const grandTotal = total + shipping + tax;
	return (
		<div>
			<h1>Order summary</h1>
			{/* <h5>Items ordered: {totalQuantity}</h5> */}
			<h5>Total: {total.toFixed(2)}</h5>
			<p>Shipping: {shipping.toFixed(2)}</p>
			<p>Price: {price.toFixed(2)}</p>
			<p>tax: {tax.toFixed(2)}</p>
			<h3>Grand-Total: {grandTotal.toFixed(2)}</h3>
		</div>
	);
};

export default Cart;
