import React from 'react';

import {ContactVoex}  from '@voex';

import {instagram,twitter,facebook}from '@assets'
import { BaseLayout } from '@ui';

const Contact = () => {


	return (
		<BaseLayout>
			<div className='container'>
				<div className='col'>
				
					<ContactVoex />
					<div className='row'>
						<div className='col-md-8'>
							<label className='text-white mb-3'>
							Get in touch with us to learn more about this exciting marketplace for liberty.
							For more information you can leave us an email at: info@voex.io.

							Or leave a message below.

							</label>
							<div className='row'>
								<div className='col'>
									<label className='text-white'>First name</label>
									<input className='form-control bg-white' type='text' />
								</div>
								<div className='col'>
									<label className='text-white'>Last name</label>
									<input className='form-control bg-white' type='text' />
								</div>
							</div>
							<div className='row'>
								<div className='col'>
									<label className='text-white'>Phone</label>
									<input className='form-control bg-white' type='tel' />
								</div>
								<div className='col'>
									<label className='text-white'>Email</label>
									<input className='form-control bg-white' type='mail' />
								</div>
							</div>
							<div className='row'>
								<div className='col'>
									<label className='text-white'>Your message</label>
									<textarea className='form-control bg-white'></textarea>
								</div>
							</div>
							<div className='row'>
								<div className='col'>
									<button className='btn-main'>Submit message</button>
								</div>
							</div>
						</div>
						<div className='col margin-left-10'>
							{/* <div className='row text-center'>
								<div className='col d-flex'>
									<img src={instagram.src} className='social-icon' />
									<img src={twitter.src} className='social-icon' />
									<img src={facebook.src} className='social-icon' />
								</div>
							</div>
							<div className='row text-start'>
								<div className='col'>
									<label className='text-white email-tag'>info@voex.com</label>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		
		</BaseLayout>
	);
};

export default Contact;
