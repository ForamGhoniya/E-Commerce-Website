import mainImage from '../../../assets/images/landing-image.png';
import nextArrow from '../../../assets/images/arrow.png';
import { DotsIcon } from '../../../shared/icons/icons';
import TopHeader from '../../../shared/topHeader/topHeader';
import { useNavigate } from 'react-router-dom';
import { Menus } from '../../../shared/constants/constants';

const DashboardContainer = () => {
	const navigate = useNavigate();

	const handleNextPageClick = () => {
		navigate('/findYourWare');
	};

	const handleMenuClick = (route) => {
		navigate(route);
	};

	return (
		<div className="dashboard position--relative">
			<TopHeader
				menu={Menus}
				handleMenuClick={handleMenuClick}
				showButton
			/>

			<div className="top__dots--icon position--absolute">
				<DotsIcon />
			</div>
			<div className="container">
				<section className="dashboard__wrapper flex_align--end width--full justify__content--center">
					<div className="sub__wrapper">
						<div className="sub__wrapper_data">
							<span className="sub_title font--bold font-family-satisfy ">
								Vintage Collection
							</span>

							<p className="main__title font--heavy font__family--inter ">
								SNEAKERS
							</p>

							<p className="second_main__title font--heavy font__family--inter text--right">
								SALE
							</p>
						</div>
						<div className="sub-text__wrapper  flex flex-direction--column">
							<p className="title__sub-text font--bold">
								Half the price, twice the style.
							</p>
							<div className="button__wrapper">
								<button className="shop__button font--bold cursor--pointer">
									SHOP NOW
								</button>
							</div>
						</div>
					</div>

					<div className="image__wrapper">
						<div className="dashboard__image ">
							<img
								src={mainImage}
								alt="mainImage"
								className="main__image width--full"
							/>
						</div>
					</div>
				</section>
			</div>
			<section className="next__page flex  justify__content--end">
				<div className="next__button__wrapper">
					<button
						className="next__button cursor--pointer border--none"
						onClick={handleNextPageClick}
					>
						<img
							src={nextArrow}
							alt="nextArrow"
							className="next__arrow"
						/>
					</button>
				</div>
			</section>
			<div className="left-dots__icon position--absolute">
				<DotsIcon />
			</div>
			<div className="right-dots__icon position--absolute">
				<DotsIcon />
			</div>
		</div>
	);
};

export default DashboardContainer;
