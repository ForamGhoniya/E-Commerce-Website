import React, { useState } from 'react';
import UserReview from '../../productDetails/component/userReview';

import User1 from '../../../assets/images/user1.png';
import User2 from '../../../assets/images/user2.png';
import User3 from '../../../assets/images/user3.png';

export const Testimonials = () => {
	const [selectedReviewIndex, setSelectedReviewIndex] = useState(0);

	const userReviews = [
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

	const handleReviewClick = (index) => {
		setSelectedReviewIndex(index);
	};

	return (
		<div className="user-reviews__wrap position--relative width-full flex justify__content--between flex-direction___row">
			{userReviews.map((review, index) => (
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
	);
};

export default Testimonials;
