import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import AllProductItem from '../../allProducts/components/allProducts';

import { SlickArrow } from '../../../shared/icons/icons';

const ProductCarousel = ({ products }) => {
	const settings = {
		rows: 2,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 800,
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow: (
			<div className="slick-arrow slick-prev">
				<SlickArrow />
			</div>
		),
		nextArrow: (
			<div className="slick-arrow slick-next">
				<SlickArrow />
			</div>
		),
	};

	return (
		<div className=" allProduct--slick__carousel">
			{products.length > 8 ? (
				<Slider {...settings}>
					{products.map((product, index) => {
						return (
							<AllProductItem
								key={`${product.id}-${index}`}
								product={product}
							/>
						);
					})}
				</Slider>
			) : (
				<div className="products__list flex">
					{products.map((product, index) => (
						<AllProductItem
							key={`${product.id}-${index}`}
							product={product}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default ProductCarousel;
