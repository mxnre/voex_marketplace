import React, { useState } from 'react';

export const SwitchPropertieNft = ({ title, caption, icon = 'fa-solid fa-plus', name, setValue }) => {
	const [isActive, setIsActive] = useState(false);

	const handleSwitch = () => {
		setIsActive(!isActive);
		const e = { target: { value: !isActive, name } };
		setValue(e);
	};

	return (
		<div className='mt-5 py-4 border-bottom border-secondary d-flex justify-content-between '>
			<div className='d-flex flex-column '>
				<div className='d-flex align-items-start mb-3'>
					<i className={`${icon} fs-4`} aria-hidden='true'></i>
					<div>
						<h4 className='p-0 m-0 ms-2 '>{title}</h4>
						<div className='ms-1 mt-2'>{caption}</div>
					</div>
				</div>
			</div>

			<div>
				<div>
					<div className={`container_custom_switch ${!isActive && 'container_custom_switch_inactive'}`} onClick={handleSwitch}>
						<input
							onClick={handleSwitch}
							type='checkbox'
							className={`custom_switch_input ${isActive ? 'custom_switch_active' : 'custom_switch_inactive'}`}
						></input>
					</div>
				</div>
			</div>
		</div>
	);
};
