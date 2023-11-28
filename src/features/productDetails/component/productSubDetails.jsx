const ProductSubDetails = (productData) => {
	return (
		<div className="product-detail__wrap">
			<div className="product-detail-title">
				<h1 className="product--name__display">
					{productData.productName}
				</h1>
				<h1 className="detail-title">Good Shoes takes you</h1>
				<h1 className="detail-title second-title">Good Places</h1>
				<p className="details">
					Step into good shoes, and you'll embark on a journey to
					incredible destinations.
					<br />
					Your choice of footwear isn't just about comfort;
					<br />
					it's a passport to adventure. So, lace up your dreams and
					stride towards a world of endless possibilities,
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
	);
};

export default ProductSubDetails;
