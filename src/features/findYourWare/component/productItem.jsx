import React from 'react';

import NikeAir from '../../../assets/images/Nike-Air-Force.png';
import NikeAirMax from '../../../assets/images/Nike-Air-Max.png';
import NikeWaffle from '../../../assets/images/Nike-Waffle-Debut.png';
import NikeAirForce from '../../../assets/images/Nike-Air-Force2.png';
import NikeP from '../../../assets/images/Nike-p.png';
import NikeESeris from '../../../assets/images/Nike-E-Series.png';
import Tatum from '../../../assets/images/Tatum-1.png';
import NikeK from '../../../assets/images/KD16-EP.png';

const ProductItem = ({ product }) => {
	const imageMapper = {
		NikeAir: NikeAir,
		NikeAirMax: NikeAirMax,
		NikeWaffle: NikeWaffle,
		NikeAirForce: NikeAirForce,
		NikeP: NikeP,
		NikeESeris: NikeESeris,
		Tatum: Tatum,
		NikeK: NikeK,
	};

	return (
		<div className="flex carousel__wrapper justify__content--center border-none flex-direction--column cursor--pointer">
			<div className="carousel-images__wrapper flex justify__content--center">
				<img
					src={imageMapper[product.imageUrl]}
					alt="productImage"
					className="carousel-image"
				/>
			</div>

			<div className="product__name-wrapper">
				<p className="product__name">{product.productName}</p>
			</div>

			<div className="size__chart width--full flex justify__content--center flex-direction--row">
				<button className="size__button cursor--pointer">S</button>
				<button className="size__button cursor--pointer">M</button>
				<button className="size__button cursor--pointer">L</button>
			</div>
		</div>
	);
};

export default ProductItem;
