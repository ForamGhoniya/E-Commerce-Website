import React, { useEffect, useState } from 'react';
import TopHeader from '../../../shared/topHeader/topHeader';
import MyCarousel from '../../findYourWare/component/slickCarousel';
import JSONDATA from '../../../JSON/PRODUCT.json';
import Spinner from '../../../shared/spinner/spinner';
import { useNavigate } from 'react-router-dom';
import { isEmpty } from 'lodash';
import Popup from '../component/openPopUp';

const FindYourWare = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const [productData, setProductData] = useState([]);
	const [productDetail, setProductDetails] = useState({});
	const [isPopUpOpen, setIsPopUpOpen] = useState(false);

	const handleNextPageClick = () => {
		navigate('/allProducts');
	};

	const fetchData = async () => {
		try {
			setTimeout(() => {
				setProductData(JSONDATA);
				setLoading(false);
			}, 1000);
		} catch (error) {
			console.error('Error fetching data:', error);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleOpenModal = (id, product) => {
		setIsPopUpOpen(true);
		setProductDetails(product);
	};

	return (
		<>
			<div className="main__wrapper dashboard position--relative">
				<div className="logo">
					<TopHeader titleClassName="font--bold" />
				</div>

				<div className="heading__wrapper">
					<h1 className="main__heading font--heavy text--center">
						Find your Perfect Wear
					</h1>
				</div>

				{loading && (
					<div className="loader__wrapper width--full flex justify__content--center">
						<Spinner />
					</div>
				)}

				{!loading && isEmpty(productData) && (
					<div className="all-products-loader width--full flex justify__content--center">
						<p className="not-found__massage">No Found Product</p>
					</div>
				)}

				{!loading && !isEmpty(productData) && (
					<>
						<div className="find-ware width--full display-flex justify__content--end flex-direction--column">
							<MyCarousel
								products={productData}
								handleOpenModal={(id, product) =>
									handleOpenModal(id, product)
								}
							/>
						</div>

						<div className="product-button__wrapper flex justify__content--center">
							<button
								className="product-button cursor--pointer border--none"
								onClick={handleNextPageClick}
							>
								ALL PRODUCTS
							</button>
						</div>
					</>
				)}
			</div>
			{isPopUpOpen && (
				<Popup
					text="Pop Up"
					product={productDetail}
					handleCloseModal={() => setIsPopUpOpen(false)}
				/>
			)}
		</>
	);
};

export default FindYourWare;
