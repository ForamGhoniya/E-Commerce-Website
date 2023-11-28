import React, { useState } from 'react';
import UserReview from '../../productDetails/component/userReview';
import { Reviews } from '../../../shared/constants/constants';

export const Testimonials = () => {
	const [selectedReviewIndex, setSelectedReviewIndex] = useState(0);

	const handleReviewClick = (index) => {
		setSelectedReviewIndex(index);
	};

	return (
		<>
			<div className="product__reviews">
				<h1 className="review__title">Testimonials</h1>
			</div>
			<div className="user-reviews__wrap position--relative width-full flex justify__content--between flex-direction___row">
				{Reviews.map((review, index) => (
					<UserReview
						key={index}
						name={review.name}
						date={review.date}
						profileImage={review.profileImage}
						reviewText={review.reviewText}
						isSelected={index === selectedReviewIndex}
						onClick={() => handleReviewClick(index)}
					/>
				))}
			</div>
		</>
	);
};

export default Testimonials;
