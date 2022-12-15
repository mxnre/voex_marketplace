import React, { useState, useRef } from 'react';
import { Modal } from 'react-bootstrap';
export const InputWithModalPropertyNft = ({ title, caption, modalTitle, modalCaption, basicName = 'property', values, onChange }) => {
	const [properties, setProperties] = useState([{ type: basicName + '-type-', name: basicName + '-name-' }]);
	const [openModal, setopenModal] = useState(false);
	const [propertiesArray, setPropertiesArray] = useState([]);

	const contador = useRef(0);
	const addProperty = () => {
		setProperties([...properties, { type: basicName + '-type-' + contador.current, name: basicName + '-name-' + contador.current }]);
		contador.current++;
	};

	const deleteProperty = (e) => {
		if (properties.length > 1) {
			console.log(e);
			const name = e.target.attributes[1].value;
			const type = e.target.id;
			const newProperties = properties.filter((property) => property.type !== type);
			//eliminar propiedad de un objeto
			delete values[type];
			delete values[name];

			setProperties(newProperties);
		}
	};

	const handleModal = () => setopenModal(!openModal);

	return (
		<>
			<div className='mt-5 py-4 border-bottom border-secondary d-flex justify-content-between '>
				<div className='d-flex flex-column '>
					<div className='d-flex align-items-start mb-3'>
						<i className='fa fa-bars fs-4' aria-hidden='true'></i>
						<div>
							<h4 className='p-0 m-0 ms-2 '>{title}</h4>
							<div className='ms-1 mt-2'>{caption}</div>
						</div>
					</div>
				</div>

				<div>
					<div>
						<i
							name='modal1'
							onClick={handleModal}
							role='button'
							className={` fa-solid fa-plus fs-2 border border-white border-3 p-1 px-2 rounded`}
						></i>
					</div>
				</div>
			</div>
			<div className={`  text-white ${!openModal ? 'd-none' : ''}`}>
				<Modal size='lg' show={openModal} onHide={handleModal} centered aria-labelledby='contained-modal-title-vcenter'>
					<Modal.Body className='modal_properties text-white'>
						<div>
							<div className='bg-transparent d-flex justify-content-end py-1'>
								<i onClick={handleModal} role='button' className='fa-solid fa-x'></i>
							</div>
							<div className='text-white container_properties'>
								<h1 className='text-white'>{modalTitle} </h1>
								<p>{modalCaption}</p>
								<div className='mt-5 '>
									{properties.map(({ type, name }, index) => (
										<div key={name} className='d-flex flex-wrap justify-content-between '>
											<div className='col-6 px-1'>
												<label className='mb-2 fw-bold fs-5'> Type</label>
												<div className='col-11 input-group'>
													<span
														onClick={deleteProperty}
														id={type}
														id2={name}
														role='button'
														className='input-group-text inputHeight  close_input   border-0 '
													>
														X
													</span>
													<input
														className='form-control bg-white inputHeight border-0'
														name={type}
														value={values[type] !== undefined ? values[type] : ''}
														onChange={onChange}
														placeholder='Character'
													/>
												</div>
											</div>

											<div className='col-6 px-1'>
												<label className='mb-2 fw-bold fs-5'> Name</label>
												<div className='col-10'>
													<input
														className='form-control bg-white col-10'
														name={name}
														value={values[name] !== undefined ? values[name] : ''}
														onChange={onChange}
														placeholder='Male'
													/>
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
