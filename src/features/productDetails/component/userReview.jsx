import React from 'react';

import { Quot, BlackQuot } from '../../../shared/icons/icons';
import Rate from '../../../assets/images/rating.png';

export const UserReview = ({
	name,
	date,
	profileImage,
	reviewText,
	isSelected,
	onClick,
}) => {
	const selectedClass = isSelected ? 'selected' : '';
	const QuotComponent = isSelected ? Quot : BlackQuot;

	return (
		<div className={`user-reviews ${selectedClass}`} onClick={onClick}>
			<div className="quot__wrap">
				<QuotComponent />
			</div>

			<div className="review-text__wrap">
				<p className="user__say">"{reviewText}"</p>
			</div>

			<div className="user__rate">
				{[1, 2, 3, 4, 5].map((index) => (
					<img key={index} src={Rate} alt="rate" className="rating" />
				))}
			</div>

			<div className="user-info__wrap flex">
				<div className="user__profile">
					<img
						src={profileImage}
						alt="profile"
						className="profile__image"
					/>
				</div>
				<div className="user__intro">
					<p className="name">{name}</p>
					<p className="date">{date}</p>
				</div>
			</div>
		</div>
	);
};

export default UserReview;
