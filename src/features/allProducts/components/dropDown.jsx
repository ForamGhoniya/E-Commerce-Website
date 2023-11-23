import { React, useState } from 'react';
import Select from 'react-select';
import { Features, MenuStyles } from '../../../shared/constants/constants';

const DropDown = ({
	selectGender,
	selectPrice,
	selectCategory,
	selectedFeature,
}) => {
	const [selectedGender, setSelectedGender] = useState(null);
	const [selectedPrice, setSelectedPrice] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState(null);

	const handleReset = () => {
		setSelectedGender(null);
		setSelectedPrice(null);
		setSelectedCategory(null);
		selectedFeature();
	};

	const featureMappings = {
		GENDER: {
			state: selectedGender,
			setState: setSelectedGender,
			selectFunction: selectGender,
		},
		PRICE: {
			state: selectedPrice,
			setState: setSelectedPrice,
			selectFunction: selectPrice,
		},
		CATEGORY: {
			state: selectedCategory,
			setState: setSelectedCategory,
			selectFunction: selectCategory,
		},
	};

	const handleSelectChange = (selectedOption, featureLabel) => {
		const feature = featureMappings[featureLabel];

		feature.setState(selectedOption);
		feature.selectFunction(selectedOption ? selectedOption.value : '');
	};

	return (
		<div className="menu__options flex justify__content--center">
			{Features.map((feature, index) => (
				<div key={index}>
					<Select
						className={`react-select`}
						options={feature.subMenu}
						placeholder={feature.label}
						isSearchable={false}
						onChange={(selectedOption) =>
							handleSelectChange(selectedOption, feature.label)
						}
						value={
							feature.label in featureMappings
								? featureMappings[feature.label].state
								: null
						}
						styles={MenuStyles}
					/>
				</div>
			))}

			<button
				className="reset__productFIlter cursor--pointer"
				type="reset"
				onClick={handleReset}
			>
				RESET
			</button>
		</div>
	);
};

export default DropDown;
