import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductItem from '../../findYourWare/component/productItem';

const MyCarousel = ({ products }) => {
	const settings = {
		centerMode: true,
		centerPadding: '100px',
		focusOnSelect: true,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
	};

	return (
		<div className="slick-carousel">
			<Slider {...settings}>
				{products.map((product, index) => {
					return (
						<ProductItem
							key={`${product.id}-${index}`}
							product={product}
						/>
					);
				})}
			</Slider>
		</div>
	);
};

export default MyCarousel;
