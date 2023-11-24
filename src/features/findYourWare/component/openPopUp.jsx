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

const Popup = ({ product, closePopup }) => {
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
		<div className="popup__overlay">
			<div className="close--button_wrap">
				<button className="close__button" onClick={closePopup}>
					<Close />
				</button>
			</div>
			<div className="popup_inner flex justify__content--center flex-direction--column">
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
			</div>
		</div>
	);
};

export default Popup;
