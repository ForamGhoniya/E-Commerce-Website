import mainImage from '../../../assets/images/landing-image.png';

const DashboardContact = () => {
	return (
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
	);
};

export default DashboardContact;
