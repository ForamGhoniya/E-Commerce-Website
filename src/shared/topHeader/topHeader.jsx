import isEmpty from 'lodash/isEmpty';
import { Link, useNavigate } from 'react-router-dom';

const TopHeader = (props) => {
	const { menu, showButton = false, titleClassName = '' } = props;
	const navigate = useNavigate();

	return (
		<>
			<nav className="navbar flex justify__content--center width--full">
				<div className="nav-container flex justify__content--between width--full">
					<div
						className="logo cursor--pointer"
						onClick={() => navigate('/dashboard')}
					>
						<h2
							className={`logo-text ${
								titleClassName
									? titleClassName
									: 'font--regular'
							} cursor--pointer`}
						>
							nike.in
						</h2>
					</div>

					{menu && !isEmpty(menu) && (
						<div className="menu">
							<ul className="list-style--none cursor--pointer flex menu-list font--regular">
								{menu.map((e, index) => (
									<li key={index}>
										<Link
											className="menu-list"
											to={e.route}
										>
											{e.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					)}

					{showButton && (
						<div className="button__wrapper">
							<button className="shop__button font--bold cursor--pointer">
								SHOP NOW
							</button>
						</div>
					)}
				</div>
			</nav>
		</>
	);
};

export default TopHeader;
