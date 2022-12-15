import React, { useRef } from 'react';
import { useForm } from '../../hooks/useForm';

import Footer from '../components/footer';
import { InputCreateNft } from '../components/InputCreateNft';
import { InputWithModalAttributeNft } from '../components/InputWithModalAttributeNft';
import { InputWithModalPropertyNft } from '../components/InputWithModalPropertyNft';
import { SwitchPropertieNft } from '../components/SwitchPropertieNft';

import { ContainerPage } from '../ContainerPage';
const initialState = {
	Explicit_content: false,
	Freezing: '',
	Supply: '',
	Unlock_content: false,
	blockChain: 'ETH',
	collection: '',
	description: '',
	externalLink: '',
	name: '',
};
export const CreateNft = () => {
	const { values, handleInputChange } = useForm(initialState);
	const inputImage = useRef(null);

	const actionsAfterSubmit = () => {
		console.log('submit');
	};

	const [nftData, setNftData] = React.useState({
		image: '',
		name: '',
		description: '',
		externalLink: '',
		collection: '',
		blockChain: 'ETH',
		supply: '',
		freezing: '',
		unlockContent: false,
		explicitContent: false,
		properties: [],
		levels: [],
		stats: [],
	});

	const handleImage = () => {
		inputImage.current.click();
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.clear();
		//console.log(values);
		console.log('llego');
		//property
		const properties = [];
		const levels = [];
		const stats = [];
		//incluir en el array con includes los campos que tengan al inico property
		const keysProperties = Object.keys(values).filter((key) => key.includes('property'));
		keysProperties.forEach((key) => {
			const property = {
				name: key,
				value: values[key],
			};
			properties.push(property);
		});

		const keysLevels = Object.keys(values).filter((key) => key.includes('Level'));
		keysLevels.forEach((key) => {
			const level = {
				name: key,
				value: values[key],
			};
			levels.push(level);
		});

		const keysStats = Object.keys(values).filter((key) => key.includes('Stats'));
		keysStats.forEach((key) => {
			const stat = {
				name: key,
				value: values[key],
			};
			stats.push(stat);
		});

		const arrayProperties = [];
		//for de dos en dos

		for (let i = 0; i < properties.length; i += 2) {
			const property = {
				name: properties[i].value,
				value: properties[i + 1].value,
			};
			arrayProperties.push(property);
		}

		const arrayLevels = [];
		//for de dos en dos

		for (let i = 0; i < levels.length; i += 3) {
			const level = {
				name: levels[i].value,
				min: levels[i + 1].value,
				max: levels[i + 2].value,
			};
			arrayLevels.push(level);
		}

		const arrayStats = [];
		//for de dos en dos

		for (let i = 0; i < stats.length; i += 3) {
			const stat = {
				name: stats[i].value,
				min: stats[i + 1].value,
				max: stats[i + 2].value,
			};
			arrayStats.push(stat);
		}
		console.log(values);
		console.log(arrayProperties);
		console.log(arrayLevels);
		console.log(arrayStats);
	};

	return (
		<>
			<ContainerPage>
				<div className='d-flex flex-column align-items-center mb-5   '>
					<div className='col-10 col-md-7 '>
						<h1 className='text-white '>*Create New Item</h1>
						<h6 className='text-white'>*Required fields</h6>
						<form onSubmit={handleSubmit} className='mt-5'>
							<div>
								<h6 className='mb-4'> Image, Video, Audio, or 3D Model *</h6>
								<div
									onClick={handleImage}
									className='col-10  d-flex align-items-center justify-content-center create_nft_border'
								>
									<i className='fa-regular fa-image h1 text-secondary'></i>
									<input ref={inputImage} type='file' name='file' className='position-absolute invisible' />
								</div>
							</div>
							<div className='mt-4 text-white col-10'>
								<InputCreateNft
									title='Name *'
									nameInput='name'
									placeholder='Item name'
									onChange={handleInputChange}
									valueInput={values.name}
								/>

								<InputCreateNft
									title='External link'
									caption=' VOEX will include a link to this URL on this item’s detail page, so that uses can click to learn more about it. You are
                            welcome to link to your own webpage with more details.'
									placeholder='http://yoursite.io/item/123'
									nameInput='externalLink'
									onChange={handleInputChange}
									valueInput={values.externalLink}
								/>

								<InputCreateNft
									title='Description'
									caption='The description will be included on the item’s detail page underneath its image. Markdown syntax is supported.'
									placeholder='Provide a detailed description of your item'
									typeInput='textArea'
									nameInput='description'
									onChange={handleInputChange}
									valueInput={values.description}
								/>

								<div>
									<label className='mb-2 fw-bold fs-5'> Collection</label>
									<p className='fs-6'>This is the collection where your item will appear.</p>
									<select
										value={values.collection}
										onChange={handleInputChange}
										className='form-select'
										name='collection'
									>
										<option className='text-secondary' value='DEFAULT' disabled>
											Select collection
										</option>
										<option value='one'>One</option>
										<option value='two'>Two</option>
										<option value='three'>Three</option>
									</select>
								</div>

								<InputWithModalPropertyNft
									title='Properties'
									caption='Textual traits that show up as rectangles'
									name='modal1'
									modalTitle='Add properties'
									values={values}
									onChange={handleInputChange}
									modalCaption='Properties show up underneath your item, are clickable, and can be filtered in your collections’s sidebar.'
								/>

								<InputWithModalAttributeNft
									title='Levels'
									caption='Numerical traits that show as a progress bar'
									titleModal='Add levels'
									basicName='Level'
									captionModal='Levels show up underneath your item, are clickable, and can be filtered in your collection’s sidebar.'
									values={values}
									onChange={handleInputChange}
								/>

								<InputWithModalAttributeNft
									title='Stats'
									caption='Numerical traits that just show as numbers'
									titleModal='Add Stats'
									basicName='Stats'
									icon='fa-solid fa-star'
									captionModal='Stats show up underneath your item, are clickable, and can be filtered in your collection’s sidebar.'
									values={values}
									onChange={handleInputChange}
								/>

								<SwitchPropertieNft
									icon='fa fa-lock'
									name='Unlock_content'
									setValue={handleInputChange}
									title='Unlockable Content'
									caption='Include unlockable content that can only be revealed by the owner of the item.'
								/>

								<SwitchPropertieNft
									icon='fa-solid fa-triangle-exclamation'
									title='Explicit & Sensitive Content'
									caption='Set this item as explicit and sensitive content'
									name='Explicit_content'
									setValue={handleInputChange}
								/>

								<InputCreateNft
									title='Supply'
									caption='The number of items that can be minted No gas cost to you!'
									placeholder='1'
									customClass='mt-4'
									nameInput='Supply'
									onChange={handleInputChange}
									valueInput={values.Supply}
								/>

								<div>
									<label className='mb-2 fw-bold fs-5'> Blockchain</label>

									<select
										className='form-select'
										aria-label='Default select example'
										name='blockChain'
										values={values.blockChain}
										onChange={handleInputChange}
									>
										<option value='ETH'>Ethereum</option>
										<option value='1'>One</option>
										<option value='2'>Two</option>
										<option value='3'>Three</option>
									</select>
								</div>

								<InputCreateNft
									customClass='mt-4'
									title='Freezing metadata'
									caption='Freezing your metadata will allow you to permanently lock and store all of this item’s content in decentralized file storage.'
									placeholder='To freeze your metadata, you must create your item first.'
									nameInput='Freezing'
									onChange={handleInputChange}
									valueInput={values.Freezing}
								/>

								<button className='btn_purple mt-4' typeof='submit'>
									create
								</button>
							</div>
						</form>
					</div>
				</div>
			</ContainerPage>

			<Footer />
		</>
	);
};
