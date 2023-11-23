import React from 'react';
import { useNavigate } from 'react-router-dom';

import NikeAir from '../../../assets/images/Nike-Air-Force.png';
import NikeAirMax from '../../../assets/images/Nike-Air-Max.png';
import NikeWaffle from '../../../assets/images/Nike-Waffle-Debut.png';
import NikeAirForce from '../../../assets/images/Nike-Air-Force2.png';
import NikeP from '../../../assets/images/Nike-p.png';
import NikeESeris from '../../../assets/images/Nike-E-Series.png';
import Tatum from '../../../assets/images/Tatum-1.png';
import NikeK from '../../../assets/images/KD16-EP.png';

const AllProductItem = ({ product }) => {
	const navigate = useNavigate();

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

	const handlePageClick = () => {
		console.log(product, 'product');
		navigate(`/productDetails/${product.id}`);
	};

	return (
		<div
			className="product-carousel__wrapper display-flex cursor--pointer flex-direction--column "
			onClick={handlePageClick}
		>
			<div className="carousel-images__wrapper ">
				<img
					src={imageMapper[product.imageUrl]}
					alt="productImage"
					className="carousel-image width--full height--full"
				/>
			</div>

			<div className="product-info width--full">
				<div className="product-info__wrapper flex width--full justify__content--between">
					<p className="product__name">{product.productName}</p>
					<p className="product__price">
						MRP : ₹ {product.productPrice}
					</p>
				</div>

				<div className="product__type__wrapper width--full flex justify__content--between">
					<p className="product__type">{product.productType}</p>
					<p className="product__category">
						{product.productCategory}
					</p>
				</div>
			</div>
		</div>
	);
};

export default AllProductItem;
