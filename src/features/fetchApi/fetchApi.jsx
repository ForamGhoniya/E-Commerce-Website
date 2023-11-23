import React, { useState, useEffect } from 'react';
import ProductCarousel from '../allProducts/components/allProductsCarousel';
function FetchApi() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch('https://mocki.io/v1/e5910f36-5656-4a9c-8e12-c1d870d954f4')
			.then((response) => response.json())
			.then((data) => {
				console.log(data, 'data');
				setProducts(data);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}, []);

	return (
		<div>
			<h1>Product Carousel</h1>
			<ProductCarousel products={products} />{' '}
		</div>
	);
}

export default FetchApi;
