import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getSystemErrorName } from "util";

interface Props {
	title?:string;
	caption?:string;
	nameInput?:string;
	valueInput?:string;
	typeInput?:string;
	onChange:(e: any)=> void;
	placeholder?:string;
	customClass?:string;
}
 const InputCreateNft = ({ title, caption, nameInput, valueInput, onChange, placeholder, typeInput, customClass }:Props) => {
	const [isTextArea, setisTextArea] = useState(false);
	useEffect(() => {
		if (typeInput === 'textArea') {
			setisTextArea(true);
		}
	}, []);

	return (
		<div className={customClass}>
			<label className='mb-2 fw-bold fs-5'> {title}</label>
			<p className='fs-6'>{caption}</p>
			{isTextArea ? (
				<textarea
					className='form-control bg-white'
					name={nameInput}
					placeholder={placeholder}
					onChange={onChange}
					value={valueInput}
				></textarea>
			) : (
				<input
					className='form-control bg-white'
					name={nameInput}
					placeholder={placeholder}
					onChange={onChange}
					value={valueInput ? valueInput : ''}
					type={typeInput}
				/>
			)}
		</div>
	);
};

InputCreateNft.propTypes = {
	title: PropTypes.string.isRequired,
	caption: PropTypes.string,
	nameInput: PropTypes.string.isRequired,
	valueInput: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	typeInput: PropTypes.string,
};
export default InputCreateNft;