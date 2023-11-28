import nextArrow from '../../../assets/images/arrow.png';
import { DotsIcon } from '../../../shared/icons/icons';
import TopHeader from '../../../shared/topHeader/topHeader';
import { useNavigate } from 'react-router-dom';
import { Menus } from '../../../shared/constants/constants';
import DashboardContact from '../componant/dashboardContent';

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
				<DashboardContact />
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
