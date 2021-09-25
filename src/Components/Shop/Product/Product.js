import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';

const Product = (props) => {
	const { name, img, price, stock, seller, star } = props.product;
	const element = <FontAwesomeIcon icon={faShoppingCart} />;

	return (
		<div className="product-con">
			<div className="grid">
				<div>
					<img src={img} alt="" />
				</div>

				<div>
					<h4 className="product-name">{name}</h4>
					<div>
						<p>By: {seller}</p>
						<p>
							<b>Price: {price}</b>
						</p>
						<p>
							only <b>{stock}</b> left in stock - order soon
						</p>
						<p>Features: {}</p>
						<Rating
							initialRating={star}
							emptySymbol="far fa-star icon-color"
							fullSymbol="fas fa-star icon-color"
							readonly
						></Rating>
						<br />
						<button
							onClick={() => props.addToCart(props.product)}
							className="regular-btn"
						>
							{element} Add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
