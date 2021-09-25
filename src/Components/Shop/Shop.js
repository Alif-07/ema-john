import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from './Cart/Cart';
import Product from './Product/Product';
import './Shop.css';
const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);
	//Products to be randered on ui
	const [displayProducts, setDisplayProducts] = useState([]);
	useEffect(() => {
		fetch('./products.json')
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				setDisplayProducts(data);
			});
	}, []);
	useEffect(() => {
		if (products.length) {
			const savedCart = getStoredCart();
			const storedCart = [];
			for (const key in savedCart) {
				// console.log(key, savedCart[key]);
				const addedProduct = products.find((product) => product.key === key);
				if (addedProduct) {
					const quantity = savedCart[key];
					addedProduct.quantity = quantity;
					storedCart.push(addedProduct);
				}
			}
			setCart(storedCart);
		}
	}, [products]);
	const addToCart = (product) => {
		const newCart = [...cart, product];
		setCart(newCart);
		//Save to locale storage
		addToDb(product.key);
	};
	const searchHandle = (e) => {
		const searchText = e.target.value;
		const matchProducts = products.filter((product) =>
			product.name.toLowerCase().includes(searchText)
		);
		setDisplayProducts(matchProducts);
	};
	return (
		<div>
			<div className="search-container">
				<input
					type="text"
					placeholder="Search product"
					onChange={searchHandle}
				/>
			</div>
			<div className="shop">
				<div className="product">
					{displayProducts.map((product) => (
						<Product
							key={product.key}
							product={product}
							addToCart={addToCart}
						/>
					))}
				</div>
				<div className="cart">
					<Cart cart={cart} />
				</div>
			</div>
		</div>
	);
};

export default Shop;
