import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { Accordion, Button, Card } from 'react-bootstrap';
import img from '../../assets/img/team.png'

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
const handleBtnClick = (e) => {
	e.preventDefault();
	const liIcon = e.currentTarget.children[1];
	const upIcons = document.querySelectorAll('.fa-angle-up');

	if (liIcon.classList.contains('fa-angle-down')) {
		liIcon.classList.remove('fa-angle-down');
		liIcon.classList.add('fa-angle-up');
	} else {
		liIcon.classList.remove('fa-angle-up');
		liIcon.classList.add('fa-angle-down');
	}
	upIcons.forEach((icon) => {
		icon.classList.remove('fa-angle-up');
		icon.classList.add('fa-angle-down');
	});
};

//use State react

const urlBase = process.env.NEXT_PUBLIC_ADMIN_BASE_URL;
const Blog = () => {
	const [data, setdata] = useState([]);

	// useEffect(() => {
	// 	const setData = async () => {
	// 		const response = await fetch(process.env.NEXT_PUBLIC_ADMIN_BASE_URL+'/blogs');
	// 		const data = await response.json();
	// 		setdata(data);
	// 		console.log(data);
	// 		console.log();
	// 	};
	// 	setData();
	// }, []);

	return (
		<div className='blogPage'>
			<GlobalStyles />
			<div className='h1-title text-white container-blog '>
				<div className='col-12  d-flex flex-wrap blog-header '>
					<img className='col-12 col-xl-7' src='./img/blog.jpg' alt='images' />
					<div className='col-12  col-xl-5  bg-white text-dark  p-5  '>
						<h1 className='mt-5'>
							Blog Title will go <br /> here in this box.
						</h1>
						<p>
							Nulla varius ac risus at commodo. Vestibulum nec nibh massa. Praesent commodo odio sem, a efficitur tellus
							vestibulum eu. Vivamus vel.
						</p>
						<a className='readMore m-1'>Read More</a>
					</div>
				</div>

				<div className='d-flex flex-wrap  justify-content-center justify-content-md-evenly  justify-content-xxl-around '>
					{/* {data.map((item, i) => (
						<div key={i} className=' blog-item mt-5  mx-2 '>
							<div>
								<img src={urlBase + item.image[0].url} />
								<p>{item.short_description}</p>
							</div>
						</div>
					))} */}

					<div  className=' blog-item mt-5  mx-2 '>
						<div>
							<img src={img} />
							<p>This a Post</p>
						</div>
					</div>
					<div  className=' blog-item mt-5  mx-2 '>
						<div>
							<img src={img} />
							<p>This a Post</p>
						</div>
					</div>
					<div  className=' blog-item mt-5  mx-2 '>
						<div>
							<img src={img} />
							<p>This a Post</p>
						</div>
					</div>
					<div  className=' blog-item mt-5  mx-2 '>
						<div>
							<img src={img} />
							<p>This a Post</p>
						</div>
					</div>
					<div  className=' blog-item mt-5  mx-2 '>
						<div>
							<img src={img} />
							<p>This a Post</p>
						</div>
					</div>
					<div  className=' blog-item mt-5  mx-2 '>
						<div>
							<img src={img} />
							<p>This a Post</p>
						</div>
					</div>
					<div  className=' blog-item mt-5  mx-2 '>
						<div>
							<img src={img} />
							<p>This a Post</p>
						</div>
					</div>

				</div>

				<div className='  mt-6 px-4 pagination d-flex justify-content-center'>
					<button className=' me-4'>
						{' '}
						<i className='fa-solid fa-chevron-left'></i> Prev page{' '}
					</button>
					<button className='pagination_page pagination_selected '> 1 </button>
					<button className='pagination_page'> 2 </button>
					<button className='pagination_page'> 3 </button>
					<button className='pagination_page'> 4 </button>
					<button className='pagination_page'> 5 </button>
					<button className='pagination_page'> 6 </button>

					<button className='ms-4'>
						{' '}
						Next page <i className='fa-solid fa-chevron-right'></i>{' '}
					</button>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Blog;
