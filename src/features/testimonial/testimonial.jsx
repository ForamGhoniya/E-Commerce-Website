import React, { useEffect, useState } from 'react';
import TopHeader from '../../shared/topHeader/topHeader';
import DropDown from '../allProducts/components/dropDown';
import ProductCarousel from '../allProducts/components/allProductsCarousel';
// import JSONDATA from '../../JSON/PRODUCT.json';
import Spinner from '../../shared/spinner/spinner';
import { isEmpty } from 'lodash';
import NotFoundProducts from '../productDetails/component/noProductFound';
import axios from 'axios';

const Testimonial = () => {
	const [loading, setLoading] = useState(true);
	const [productData, setProductData] = useState([]);
	const [selectedGender, setSelectedGender] = useState('');
	const [selectedPrice, setSelectedPrice] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('');
	const [filteredProducts, setFilteredProducts] = useState([]);
	console.log(filteredProducts);

	const fetchData = async () => {
		try {
			const res = await axios.get('https://dummyjson.com/products');

			setProductData(res.data.products);
			setFilteredProducts(res.data.products);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.error('Error fetching data:', error);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	const handleGenderChange = (selectedValue) => {
		setSelectedGender(selectedValue);
		filterProducts(selectedValue, selectedPrice, selectedCategory);
	};

	const handlePriceChange = (selectedValue) => {
		setSelectedPrice(selectedValue);
		filterProducts(selectedGender, selectedValue, selectedCategory);
	};

	const handleCategoryChange = (selectedValue) => {
		setSelectedCategory(selectedValue);
		filterProducts(selectedGender, selectedPrice, selectedValue);
	};

	const handleReset = () => {
		setSelectedGender('');
		setSelectedPrice('');
		setSelectedCategory('');
		setFilteredProducts(productData);
	};

	const filterProducts = (gender, price, category) => {
		const filteredProduct = productData.filter((product) => {
			const isGenderMatch =
				!gender ||
				product.genderType.toLowerCase() === gender.toLowerCase();
			const isPriceMatch =
				!price ||
				parseFloat(product.productPrice.replace(',', '')) <=
					parseFloat(price);
			const isCategoryMatch =
				!category ||
				product.productCategory.toLowerCase() ===
					category.toLowerCase();
			return isGenderMatch && isPriceMatch && isCategoryMatch;
		});
		setFilteredProducts(filteredProduct);
	};

	return (
		<div className="main__wrapper dashboard position--relative">
			<div className="logo">
				<TopHeader menu={[]} />
			</div>

			<div className="heading__wrapper">
				<h1 className="products-heading text--center font--heavy">
					ALL PRODUCTS
				</h1>
			</div>

			<div className="menu__wrap flex justify__content--center width--full flex-direction--column">
				<DropDown
					selectGender={handleGenderChange}
					selectPrice={handlePriceChange}
					selectCategory={handleCategoryChange}
					selectedFeature={handleReset}
				/>
			</div>

			<div className="all-products width--full flex justify__content--center">
				{loading && (
					<div className="loader__wrapper width--full flex justify__content--center">
						<Spinner />
					</div>
				)}

				{!loading && isEmpty(filteredProducts) && <NotFoundProducts />}
				{!loading && !isEmpty(filteredProducts) && (
					<ProductCarousel products={filteredProducts} />
				)}
			</div>
		</div>
	);
};
export default Testimonial;
