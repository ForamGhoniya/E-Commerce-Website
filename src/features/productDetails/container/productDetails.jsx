import React, { useEffect, useState } from 'react';
import { BackArrow } from '../../../shared/icons/icons';
import TopHeader from '../../../shared/topHeader/topHeader';
import { useNavigate, useParams } from 'react-router-dom';
import Testimonials from '../../productDetails/component/testimonials';
import Spinner from '../../../shared/spinner/spinner';

import JSONDATA from '../../../JSON/PRODUCT.json';

import NikeAir from '../../../assets/images/Nike-Air-Force.png';
import NikeAirMax from '../../../assets/images/Nike-Air-Max.png';
import NikeWaffle from '../../../assets/images/Nike-Waffle-Debut.png';
import NikeAirForce from '../../../assets/images/Nike-Air-Force2.png';
import NikeP from '../../../assets/images/Nike-p.png';
import NikeESeris from '../../../assets/images/Nike-E-Series.png';
import Tatum from '../../../assets/images/Tatum-1.png';
import NikeK from '../../../assets/images/KD16-EP.png';
import { isEmpty } from 'lodash';

const ProductDetails = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const [productData, setProductData] = useState({});

	const { id } = useParams();

	const fetchData = () => {
		try {
			setTimeout(() => {
				const data = JSONDATA.find((product) => product.id === id);
				setProductData(data);
				setLoading(false);
			}, 1000);
		} catch (error) {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	});

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
		<div className="main__wrapper dashboard position--relative">
			<div className="logo">
				<TopHeader menu={[]} />
			</div>

			<div
				className="back-arrow cursor--pointer position--absolute"
				onClick={() => navigate(-1)}
			>
				<BackArrow />
			</div>

			<div className="container">
				{!loading && isEmpty(productData) && (
					<div className="all-products-loader width--full flex justify__content--center">
						<p className="not-found__massage">
							{'No Found Product '}
						</p>
					</div>
				)}

				{loading && (
					<div className="loader__wrapper width--full flex justify__content--center">
						<Spinner />
					</div>
				)}

				{!loading && !isEmpty(productData) && (
					<>
						<div className="product-image__wrap  position--absolute loader__position">
							<img
								src={imageMapper[productData.imageUrl]}
								alt="product"
								className="product-image width--full animate__animated animate__backInRight"
							/>
						</div>
						<div className="product-detail__wrap">
							<div className="product-detail-title">
								<h1 className="product--name__display">
									{productData.productName}
								</h1>
								<h1 className="detail-title">
									Good Shoes takes you
								</h1>
								<h1 className="detail-title second-title">
									Good Places
								</h1>
								<p className="details">
									Step into good shoes, and you'll embark on a
									journey to incredible destinations.
									<br />
									Your choice of footwear isn't just about
									comfort;
									<br />
									it's a passport to adventure. So, lace up
									your dreams and stride towards a world of
									endless possibilities,
									<br />
									one stylish step at a time.
								</p>
							</div>

							<div className="detail-button-wrap ">
								<button className="shop-now-button flex justify__content--center cursor--pointer">
									SHOP NOW
								</button>
							</div>
						</div>
						<div className="product-reviews__wrap">
							<div className="user-reviews__wrap width--full position--relative">
								<div className="product__reviews">
									<h1 className="review__title">
										Testimonials
									</h1>
								</div>
								<Testimonials />
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default ProductDetails;
