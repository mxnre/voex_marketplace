import React, { useEffect, useState } from 'react';
import { BaseLayout } from "@ui";

import {person as img,blog} from '@assets';
import { BlogItem } from '@voex';
import { BlogItemInterface } from 'interfaces/Blog';










const handleBtnClick = (e:any) => {
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
	const [data, setdata] = useState<BlogItemInterface[]|undefined>();

	useEffect(() => {

		const setData = async () => {
		try {
			const response = await fetch(process.env.NEXT_PUBLIC_ADMIN_BASE_URL+'/api/posts?populate=*');
		
			const data = await response.json();
			setdata(data.data);
			console.log(data.data)
		} catch (error) {
			
		}
		
		};
		setData();

	}, []);

	return (
	<BaseLayout>
    	<div className='blogPage'>
			
			<div className='h1-title text-white container-blog '>
				<div className='col-12  d-flex flex-wrap blog-header '>
					<img className='col-12 col-xl-7' src={blog.src} alt='images' />
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
					{data!==undefined&&data.length>0&&data.map((item, i) => (
						<div key={i}>
                            <BlogItem urlImg={item.attributes.image.data[0].attributes.url} title={item.attributes.title} shortDescription={item.attributes.short_description}/>
                        </div>
					))}

					

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
					
						Next page <i className='fa-solid fa-chevron-right'></i>{' '}
					</button>
				</div>
			</div>

			
		</div>
    </BaseLayout>
	);
};

export default Blog;
