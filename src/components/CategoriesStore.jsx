import React from 'react';
import '../styles/CategoriesStore.css';
import categ1hops from '../img/categ1hops.jpg';
import categ2malt from '../img/categ2malt.jpg';
import categ3yeast from '../img/categ3yeast.jpg';
import categ4tools from '../img/categ4tools.jpg';

export default function CategoriesStore() {
	return (
		<>
			<section className='home-categories py-2'>
				<div className='container p-5'>
					<div className='row'>
						{/*title*/}
						<div className='col-10 mx-auto col-md-6 col-lg-3 my-3'>
							<h5 className='text-uppercase'>product categories</h5>
							<p className='text-muted'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Possimus, amet?
							</p>
							<a href='#/' className='text-capitalize categories-link'>
								view all categories
							</a>
							<div className='categories-underline' />
						</div>
						{/*end of title*/}
						{/*main*/}
						<div className='col-10 mx-auto col-md-6 col-lg-9 my-3'>
							<div className='row'>
								{/*single category*/}
								<div className='col-md-6 col-lg-3 my-3'>
									<div className='category-container'>
										<img
											src={categ1hops}
											className='img-fluid category-img'
											alt='categories store'
										/>
										<a href='#/' className='category-link text-slanted'>
											<h6 className='text-uppercase mb-0'>Hops</h6>
											<p className='mb-0 text-yellow fw-bold'>33 items</p>
										</a>
									</div>
								</div>
								{/*end of single category*/}
								{/*single category*/}
								<div className='col-md-6 col-lg-3 my-3'>
									<div className='category-container'>
										<img
											src={categ2malt}
											className='img-fluid category-img'
											alt='categories store'
										/>
										<a
											href='#/'
											className='category-link text-slanted text-weight-bold'>
											<h6 className='text-uppercase mb-0'>Malts</h6>
											<p className='mb-0 text-yellow fw-bold'>68 items</p>
										</a>
									</div>
								</div>
								{/*end of single category*/}
								{/*single category*/}
								<div className='col-md-6 col-lg-3 my-3'>
									<div className='category-container'>
										<img
											src={categ3yeast}
											className='img-fluid category-img'
											alt='categories store'
										/>
										<a
											href='#/'
											className='category-link text-slanted text-weight-bold'>
											<h6 className='text-uppercase mb-0'>Yeasts</h6>
											<p className='mb-0 text-yellow fw-bold'>61 items</p>
										</a>
									</div>
								</div>
								{/*end of single category*/}
								{/*single category*/}
								<div className='col md-6 col-lg-3 my-3'>
									<div className='category-container'>
										<img
											src={categ4tools}
											className='img-fluid category-img'
											alt='categories store'
										/>
										<a
											href='#/'
											className='category-link text-slanted text-weight-bold'>
											<h6 className='text-uppercase mb-0'>Tools</h6>
											<p className='mb-0 text-yellow fw-bold'>113 items</p>
										</a>
									</div>
								</div>
								{/*end of single category*/}
							</div>
						</div>
						{/*end of main*/}
					</div>
				</div>
			</section>
		</>
	);
}
