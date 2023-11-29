import User1 from '../../assets/images/user1.png';
import User2 from '../../assets/images/user2.png';
import User3 from '../../assets/images/user3.png';

const Gender = [
	{ label: 'Female', value: 'female' },
	{ label: 'Male', value: 'male' },
];

const Price = [
	{ label: '0-5000', value: '5000' },
	{ label: '6000-10000', value: '10000' },
	{ label: '11000-15000', value: '15000' },
	{ label: '16000-20000', value: '20000' },
];

const Category = [
	{ label: 'Nike', value: 'nike' },
	{ label: 'Campus', value: 'campus' },
	{ label: 'Puma', value: 'puma' },
	{ label: 'Skechers', value: 'skechers' },
];

const Features = [
	{ label: 'GENDER', subMenu: Gender },
	{ label: 'PRICE', subMenu: Price },
	{ label: 'CATEGORY', subMenu: Category },
];

const Menus = [
	{
		name: 'Home',
		route: '/home',
	},
	{
		name: 'About',
		route: '/',
	},
	{
		name: 'Product',
		route: '/product',
	},
	{
		name: 'Testimonials',
		route: '/test',
	},
];

const MenuStyles = {
	control: (provided) => ({
		...provided,
		backgroundColor: 'transparent',
		color: '#222222',
		border: 0,
		boxShadow: 'none',
		width: '140px',
		cursor: 'pointer',
		':hover': {
			boxShadow:
				'0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset',
			borderRadius: '8px',
		},
	}),
	menu: (provided) => ({
		...provided,
		backgroundColor: '#fab801',
		boxShadow:
			'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
		borderRadius: '8px',
	}),
	placeholder: (provided) => ({
		...provided,
		color: '#222222',
		fontWeight: 'bold',
	}),
	singleValue: (provided) => ({
		...provided,
		color: '#222222',
		fontWeight: 'bold',
	}),
	option: (base, state) => ({
		...base,
		color: state.isFocused ? 'white' : '#222222',
		padding: 8,
		backgroundColor: state.isFocused ? '#222222' : 'transparent',
		cursor: 'pointer',
		':active': {
			backgroundColor: '#222222',
			color: '#ffffff',
		},
	}),
	dropdownIndicator: (provided, state) => ({
		...provided,
		color: state.isFocused ? '#222222' : '#222222',
		transform: state.selectProps.menuIsOpen
			? 'rotate(180deg) !important'
			: 'none',
		transition: 'all 0.2s linear',
		alignContent: 'flex-start',
		marginLeft: '-1px',
		padding: '0',
		':hover': {
			color: '#222222',
		},
	}),
};

const Reviews = [
	{
		name: 'Sarah Johnson',
		date: '2 November 2021',
		profileImage: User1,
		reviewText:
			"I adore my 'ComfortWalk' sneakers! They're stylish and incredibly comfy. Your e-commerce site made shopping a breeze. I'll be a loyal customer.",
	},
	{
		name: 'David Rodriguez',
		date: '10 January 2023',
		profileImage: User2,
		reviewText:
			"Found my perfect 'Durashield' work boots here. Sturdy and dependable. Your website rocks! Great service!",
	},
	{
		name: ' Emily Turner',
		date: '19 November 2021',
		profileImage: User3,
		reviewText:
			"GlamourHeels wowed at my event! Comfy and elegant. Your site's a gem. Recommending it to all!",
	},
];

export { Features, Menus, MenuStyles, Reviews };
