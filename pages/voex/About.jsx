
import Footer from '@voex';
1
import { BaseLayout } from '@ui';
import { bgBlue, bgGray, bgShape, person, founder } from '@assets';


const array = [0, 1, 2, 3];
const About = () => {
	return (
		<BaseLayout>
			<div className='d-flex flex-column align-items-center'>
				<div className='d-flex justify-content-center'>

					<div className='h1-title-without-mb text-white pt-4 w-75' style={minHeight}>
						<h1>
							The VoEx Mission
						</h1>

						<p className='mb-3'>
							VoEx is dedicated to improving the human condition through the promotion of individual liberty and free markets.
						</p>
						<p>We’ve created an NFT marketplace that provides the tools for nonprofit institutions to build community, deepen relationships with their supporters, and monetize their intellectual property.</p>

					</div>
				</div>
				{/* <img style={imageClass} src={bgGray.src} alt='' className='imageFondo' /> */}

				<div />
			</div>
			<div style={style} className='d-flex justify-content-center align-items-center flex-column pb-5'>
				<h1 className='text-center pt-5 col-11 col-xl-6  text-dark'>A New NFT Use-case for Philanthropy</h1>
				<p className='col-11 col-xl-6 col-md-10 text-dark'>
					Collectors who own, admire, and share their NFT assets become stakeholders in the growth of an ecosystem that advances a common vision.
					<br />
					<br />
					Through the use of smart contract utility features, organizations can incentivize community engagement that will reward both creators and participants.
					<br />
					<br />
					Organizations can monetize intellectual assets such as: written works, still images, audio, and video.


				</p>

			</div>
			<div style={styleBlue} className='bg- d-flex justify-content-center align-items-center flex-column pb-5'>
				<div className=' col-12 col-xl-9 col-xxl-7  d-flex justify-content-start'>
					<h1 className='  text-center text-md-start ms-3 px-3' style={h1Class}>
						The VoEx Team					</h1>
				</div>
				<div className='d-flex flex-wrap  justify-content-center justify-content-md-evenly  justify-content-xxl-around '>

					<div className='blog-item-about mt-1 mx-2 '>
						<div>
							<img src={founder.src} alt='asa' />
							<h5 className='mt-3'>Joseph DiFiglia</h5>
							<h6 className='text-black my-1'>Founder</h6>
							<p className='text-black'>Bio: Joe has dedicated the past decade of his career to helping students see the world through an economics lens. As a full-time NJCU faculty member and the Executive Director of the New Jersey Council for Economic Education, he oversees initiatives aimed at enhancing economic education for New Jersey’s students. </p>
							<p className='text-black'>
								Working in support of nonprofit organizations in the Liberty movement, he and his team have built a philanthropic apparatus to help these institutions monetize their assets and engage their community.
							</p>
						</div>
					</div>
					<div className='blog-item-about mt-1 mx-2 '>
						<div>
							<img src={founder.src} alt='asa' />
							<h5 className='mt-3'>Jeff Gonzalez</h5>
							<h6 className='text-black my-1'>Marketing & Business Development</h6>
							<p className='text-black'>
								Bio: Jeff has dedicated his 20+ year career to business development and digital marketing strategy. From the very beginning Jeff has worked side-by-side with Founder, Joe DiFiglia to help map out the VoEx vision and continually improve the overall strategic planning. Jeff also leads the marketing and development team for VoEx.

							</p>
						</div>
					</div>
					<div className='blog-item-about mt-1 mx-2 '>
						<div>
							<img src={founder.src} alt='asa' />
							<h5 className='mt-3'>Ken Glover</h5>
							<h6 className='text-black my-1'>Marketing & Product Architecture</h6>
							<p className="text-black">
								Bio: With a background in digital product architecture, Ken provides VoEx with strategic planning, software development, application integration, and digital team management. Ken is actively researching and planning the next steps for VoEx’s continued expansion in Web3.0.
							</p>
						</div>
					</div>
					<div className='blog-item-about mt-1 mx-2 '>
						<div>
							<img src={founder.src} alt='asa' />
							<h5 className='mt-3'>Alcides Aguasvivas</h5>
							<h6 className='text-black my-1'>Project Strategy & Design</h6>
							<p className='text-black'>Bio: Al is deeply passionate for all things NFT and Crypto. He leads our project strategies and has designed the VoEx marketplace among other NFT ventures. Al’s creative background and deep knowledge of NFTs provide VoEx with a strategic advantage both for the marketplace and for individual projects.

							</p>
						</div>
					</div>
					<div className='blog-item-about mt-1 mx-2 '>
						<div>
							<img src={founder.src} alt='asa' />
							<h5 className='mt-3'>Carlos Aguasvivass</h5>
							<h6 className='text-black my-1'>Lead Developer</h6>
							<p className='text-black'>Bio: Carlos is dedicated to web and software development. He has been working on Blockchain projects for several years, developing in Javascript, ReactJs, and Solidity. Carlos also acquired working knowledge of the Moralis platform, and Ganache, Truffle, and Remix to do testing on the Ethereum Virtual Machine (EVM).  Carlos leads the development team in the creation of the VoEx marketplace.

							</p>
						</div>
					</div>

				</div>
			</div>
		
		</BaseLayout>
	);
};

const style = {
	backgroundImage: `url(${bgShape.src})`,
	paddingTop: '18em',
};

const styleBlue = {
	backgroundImage: `url(${bgBlue.src})`,
};

const minHeight = {
	minHeight: '43em',
};

const imageClass = {
	position: 'absolute',
	top: '33em',
};

const h1Class = {
	textAlign: 'left',
	color: '#fff',
	width: '100%',
	marginLeft: '6em',
	marginTop: '2em',
};

export default About;
