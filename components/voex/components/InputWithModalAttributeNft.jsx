import React, { useState, useRef } from 'react';
import { Modal } from 'react-bootstrap';
import { createGlobalStyle } from 'styled-components';
export const InputWithModalAttributeNft = ({
	basicName,
	title,
	caption,
	titleModal,
	captionModal,
	icon = 'fas fa-chart-simple',
	values,
	onChange,
}) => {
	const [openModal, setopenModal] = useState(false);

	const contador = useRef(0);
	const [attributes, setAttributes] = useState([{ min: basicName + '-min', max: basicName + '-max', name: basicName + '-name' }]);
	const addProperty = () => {
		setAttributes([
			...attributes,
			{
				min: basicName + '-min' + contador.current,
				max: basicName + '-max' + contador.current,
				name: basicName + '-name' + contador.current,
			},
		]);
		contador.current++;
	};

	const deleteAttribute = (e) => {
		console.log(e.target.id);
		if (attributes.length > 1) {
			const name = e.target.id;
			const newAttributes = attributes.filter((attribute) => attribute.name !== name);
			setAttributes(newAttributes);
		}
	};

	const handleModal = () => setopenModal(!openModal);

	const Styled = createGlobalStyle`
            .modal_rank_input_left{    
                -webkit-border-top-left-radius: 7px !important;
                -webkit-border-bottom-left-radius: 7px !important;
                -moz-border-radius-topleft: 7px !important; 
                -moz-border-radius-bottomleft: 7px !important;
                 border-top-left-radius: 7px !important;
                 border-bottom-left-radius: 7px !importan;
            };
            .modal_rank_input_right{
                -webkit-border-top-right-radius: 7px !important;
                -webkit-border-bottom-right-radius: 7px !important;
                -moz-border-radius-topright: 7px !important;
                -moz-border-radius-bottomright: 7px !important;
                border-top-right-radius: 7px !important;
                border-bottom-right-radius: 7px !important
			;}

            .modal_rank_off{
                background-color: #efefef !important;
                color:black;
            }
`;

	return (
		<>
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
						<i
							name='modal2'
							onClick={handleModal}
							role='button'
							className={` fa-solid fa-plus fs-2 border border-white border-3 p-1 px-2 rounded`}
						></i>
					</div>
				</div>
			</div>
			<div className={`  text-white ${!openModal ? 'd-none' : ''}`}>
				<Styled />
				<Modal size='lg' show={openModal} onHide={handleModal} centered aria-labelledby='contained-modal-title-vcenter'>
					<Modal.Body className='modal_properties text-white'>
						<div>
							<div className='bg-transparent d-flex justify-content-end py-1'>
								<i onClick={handleModal} role='button' className='fa-solid fa-x'></i>
							</div>
							<div className='text-white container_properties'>
								<h1 className='text-white'>{titleModal} </h1>
								<p>{captionModal}</p>
								<div className='mt-5 '>
									{attributes.map(({ name, min, max }, index) => (
										<div key={name} className='d-flex flex-wrap justify-content-between '>
											<div className='col-6 px-1'>
												<label className='mb-2 fw-bold fs-5'> Name</label>
												<div className='col-11 input-group'>
													<span
														onClick={deleteAttribute}
														id={name}
														role='button'
														className='input-group-text inputHeight  close_input   border-0 '
													>
														X
													</span>
													<input
														className='form-control bg-white inputHeight border-0'
														name={name}
														value={values[name] !== undefined ? values[name] : ''}
														onChange={onChange}
														placeholder='Character'
													/>
												</div>
											</div>

											<div className='col-6  px-1   rounded-1'>
												<label className='mb-2 fw-bold fs-5'> Value</label>
												<div className='d-flex  '>
													<div className='col-4'>
														<input
															className='form-control bg-white col-10 rounded-0 text-center modal_rank_input_left inputHeight'
															name={min}
															type='number'
															min={1}
															value={values[min] !== undefined ? values[min] : ''}
															onChange={onChange}
														/>
													</div>
													<div className='col-2 p-0 d-flex  align-items-center justify-content-center modal_rank_off inputHeight'>
														OF
													</div>
													<div className='col-4'>
														<input
															className='form-control bg-white col-10 rounded-0 text-center modal_rank_input_right inputHeight'
															name={max}
															type='number'
															min={1}
															value={values[max] !== undefined ? values[max] : ''}
															onChange={onChange}
														/>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>

								<div className='mt-3'>
									<button onClick={addProperty} className='bg-transparent fw-bold fs-6 px-4 py-2 text-white border'>
										Add more
									</button>
								</div>
							</div>

							<div className='mt-5 borde border-top border_purple py-4'>
								<button
									type='button'
									onClick={handleModal}
									className='bg-black fw-bold fs-6 px-4 py-2 text-white  border-0 rounded'
								>
									Save Changes
								</button>
							</div>
						</div>
					</Modal.Body>
				</Modal>
			</div>
		</>
	);
};
