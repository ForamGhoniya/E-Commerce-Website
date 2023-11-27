import React from 'react';
import { Close } from '../../../shared/icons/icons';

import NikeAir from '../../../assets/images/Nike-Air-Force.png';
import NikeAirMax from '../../../assets/images/Nike-Air-Max.png';
import NikeWaffle from '../../../assets/images/Nike-Waffle-Debut.png';
import NikeAirForce from '../../../assets/images/Nike-Air-Force2.png';
import NikeP from '../../../assets/images/Nike-p.png';
import NikeESeris from '../../../assets/images/Nike-E-Series.png';
import Tatum from '../../../assets/images/Tatum-1.png';
import NikeK from '../../../assets/images/KD16-EP.png';

const Popup = ({ product, handleCloseModal }) => {
	console.log('product', product);
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
		<div className="popup__overlay ">
			<div className="popup_inner flex  flex-direction--column animate__animated animate__fadeIn">
				<div className="close--button_wrap width--full ">
					<button
						className="close__button cursor--pointer"
						onClick={handleCloseModal}
					>
						<Close />
					</button>
				</div>

				<div className="display-flex popUp_wrap width--full justify__content--center">
					<div className="carousel-images__wrapper flex justify__content--center">
						<img
							src={imageMapper[product.imageUrl] || ''}
							alt="productImage"
							className="carousel-image"
						/>
					</div>

					<div className="select-size__text display-flex flex-direction--column justify__content--between">
						<div className="product__name-wrapper">
							<p className="product__name">
								{product.productName}
							</p>
							<p className="product__price">
								₹ {product.productPrice}
							</p>
						</div>
						<select class="size-dropdown cursor--pointer">
							<option value="">Select Size</option>
							<option value="">
								XXXS - US Chest 30-32in (76-81cm)
							</option>
							<option value="">XXS - Chest 32-34"</option>
							<option value="">XS - Chest 34-36"</option>
							<option value="">S - Chest 36-38"</option>
							<option value="">M - Chest 38-40"</option>
							<option value="">L - Chest 40-42"</option>
							<option value="">XL - Chest 42-44"</option>
							<option value="">XXL - Chest 44-46"</option>
							<option value="">XXXL - Chest 46-48" </option>
						</select>
						<button
							src="#"
							className="view-more__detail button cursor--pointer"
						>
							View More Details
						</button>
						<button
							src="#"
							className="add-to__bag button cursor--pointer"
						>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Popup;
