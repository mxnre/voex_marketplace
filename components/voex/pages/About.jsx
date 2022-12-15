import { createGlobalStyle } from 'styled-components';
import Footer from '../components/footer';
import image from '../../assets/img/fondoGris.jpg';
import imageFondo from '../../assets/img/bg-shape-1.jpg';
import imageBlue from '../../assets/img/baseblue.svg';
import team from '../../assets/img/team.png';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: #403f83;
    border-bottom: solid 1px #403f83;
  }
  header#myHeader.navbar .search #quick_search{
    color: #fff;
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
    color: rgba(255, 255, 255, .5);
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }
`;

const array = [0, 1, 2, 3];
const About = () => {
	return (
		<>
			<div className='d-flex flex-column align-items-center'>
				<div className='d-flex justify-content-center'>
					<GlobalStyles />
					<div className='h1-title-without-mb text-white pt-4 w-75' style={minHeight}>
						<h1>
							Lorem ipsum dolor <br />
							amet, consectetur.
						</h1>

						<p>
							Nulla varius ac risus at commodo. Vestibulum nec nibh massa. Praesent commodo odio sem, a efficitur tellus
							vestibulum eu. Vivamus vel faucibus risus, ac euismod elit. Duis efficitur blandit lectus sit amet pulvinar.
						</p>
						<p>
							Maecenas viverra, augue at congue pellentesque, purus augue commodo eros, convallis dictum massa justo quis
							urna. Proin a efficitur nisi, vel maximus velit. Sed sit amet enim dignissim neque aliquam commodo id in
							turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
						</p>
					</div>
				</div>
				<img style={imageClass} src={image} alt='' className='imageFondo' />

				<div />
			</div>
			<div style={style} className='d-flex justify-content-center align-items-center flex-column pb-5'>
				<h1 className='text-center pt-5 col-11 col-xl-6'>A New NFT Use-case for Philanthropy</h1>
				<p className='col-11 col-xl-6 col-md-10'>
					Nulla varius ac risus at commodo. Vestibulum nec nibh massa. Praesent commodo odio sem, a efficitur tellus vestibulum
					eu. Vivamus vel faucibus risus, ac euismod elit. Duis efficitur blandit lectus sit amet pulvinar.
				</p>
				<p className='col-11 col-xl-6 col-md-10'>
					{' '}
					Maecenas viverra, augue at congue pellentesque, purus augue commodo eros, convallis dictum massa justo quis urna. Proin
					a efficitur nisi, vel maximus velit. Sed sit amet enim dignissim neque aliquam commodo id in turpis. Orci varius
					natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
				</p>
				<p className='col-11 col-xl-6 col-md-10'>
					{' '}
					Vestibulum eu. Vivamus vel faucibus risus, ac euismod elit. Duis efficitur blandit lectus sit amet pulvinar.Maecenas
					viverra, augue at congue pellentesque, purus augue commodo eros, convallis dictum massa justo quis urna. Proin a
					efficitur nisi, vel maximus velit. Sed sit amet enim dignissim neque aliquam commodo id in turpis. Orci varius natoque
					penatibus et magnis dis parturient montes, nascetur ridiculus mus.
				</p>
			</div>
			<div style={styleBlue} className='bg- d-flex justify-content-center align-items-center flex-column pb-5'>
				<div className=' col-12 col-xl-9 col-xxl-7  d-flex justify-content-start'>
					<h1 className='  text-center text-md-start ms-3 px-3' style={h1Class}>
						Our Team
					</h1>
				</div>
				<div className='d-flex flex-wrap  justify-content-center justify-content-md-evenly  justify-content-xxl-around '>
					{array.map((x, i) => (
						<div key={i} className='blog-item-about mt-1 mx-2 '>
							<div>
								<img src={team} alt='asa' />
								<h5 className='mt-3'>Full Name</h5>
								<p>Job Title</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

const style = {
	backgroundImage: `url(${imageFondo})`,
	paddingTop: '18em',
};

const styleBlue = {
	backgroundImage: `url(${imageBlue})`,
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
