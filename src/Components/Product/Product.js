import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Product.css';
const Product = (props) => {
	const { name, img, price, stock, seller, features } = props.product;

	console.log(Object.assign({}, ...features));

	const element = <FontAwesomeIcon icon={faShoppingCart} />;

	return (
		<div className="product">
			<img src={img} alt="" />

			<div>
				<h5 className="product-name">{name}</h5>
				<div>
					<p>By:{seller}</p>
					<p>
						<b>Price:{price}</b>
					</p>
					<p>
						only <b>{stock}</b> left in stock - order soon
					</p>
					<p>Features: {}</p>
					<button
						onClick={() => props.addHandleToCart(props.product)}
						className="regular-btn"
					>
						{element} Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default Product;
