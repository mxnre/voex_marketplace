// import React from 'react';
import { FunctionComponent, useEffect, useState } from 'react';
import Link from "next/link";
import { logoVoex as logo } from '@assets'
import { useRouter } from 'next/router';
// import { Link } from '@reach/router';
const Footer: FunctionComponent = () => {
	const [avatar, setAvatar] = useState<any>();
	const router = useRouter();

	useEffect(() => {
		setAvatar(localStorage.getItem('avatar'));
	})
	const gotoProfile = () => {
		console.log("goto profile : ", avatar);
		avatar ? router.push('/my-profile') : router.push('/login');
	}
	
	return (

		<footer className='footer-light'>
			<div className='container'>
				<div className='row d-flex  flex-wrap'>
					<div className='col-12  col-md-4 d-flex justify-content-center align-items-center '>
						<div className='d-flex'>
							<span>
								<img alt='' className='f-logo d-1' src={logo.src} />
							</span>
						</div>
					</div>
					<div className='d-flex col-12 col-md-8  flex-wrap  justify-content-between justify-content-xl-end mt-3'>
						<div className='col-md-3  col-xs-1'>
							<div className='widget'>
								<ul>
									<li><Link href="/marketplace"><a className="navbar-item">Marketplace</a></Link></li>
									<li><Link href="/collection"><a className="navbar-item">Collections</a></Link></li>
									<li><Link href="/about"><a className="navbar-item">About</a></Link></li>
									{/* <li><Link href="/voex/Blog">Blog</Link></li> */}
									<li><Link href="/contact"><a className="navbar-item">Contact</a></Link></li>
								</ul>
							</div>
						</div>
						{/* <div className='col-md-3  col-xs-1'>
							<div className='widget'>
								<ul>
									<li><Link href="/voex/Support">Support</Link></li>
									<li><Link href="/voex/Faqs">FAQS</Link></li>
									<li><Link href="/voex/Press">Press</Link></li>
								   
								   
								</ul>
							</div>
						</div> */}
						<div className='col-md-3  col-xs-1'>
							<div className='widget'>
								<ul>
									<li><a onClick={gotoProfile}  className="navbar-item">My Profile</a></li>

									<li><Link href="/create-nft"><a className="navbar-item">Create NFT</a></Link></li>
									<li><Link href="/"><a className="navbar-item">Connect Wallet</a></Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='subfooter border-top border-secondary mt-4'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='de-flex justify-content-between '>
								<div className='de-flex-col  d-flex align-items-center'>
									<ul className='d-flex list-unstyled  '>
										<li className='ms-4 '><Link href='/'> © 2022 VOEX</Link></li>
										{/* <li className='ms-3'> <Link href='/privacy_policy'>Privacy Policy</Link> </li> */}
										{/* <li className='ms-3'> <Link href='/terms_of_services'>Terms of Use</Link> </li> */}
										{/* <li className='ms-3'> <Link href='#'>Sitemap</Link> </li> */}
									</ul>
								</div>

								<div className='d-flex col justify-content-center justify-content-md-end align-items-start'>
									<div className='fs-5'>
										<span className='m-2 navbar-item' onClick={() => window.open('https://www.facebook.com/voluntaryexch', '_self')}>
											<i className="fa-brands fa-facebook-f"></i>
										</span>
										<span className='m-2 navbar-item' onClick={() => window.open('https://twitter.com/VoluntaryExch', '_self')}>
											<i className="fa-brands fa-twitter"></i>
										</span>
										<span className='m-2 navbar-item' onClick={() => window.open('https://www.linkedin.com/company/voluntaryexchange', '_self')}>
											<i className="fa-brands fa-linkedin-in"></i>
										</span>
										{/* <span onClick={() => window.open('', '_self')}>
										<i className="fa-brands fa-pinterest-p"></i>
										</span>
										<span onClick={() => window.open('', '_self')}>
										<i className="fa-solid fa-rss"></i>
										</span> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
