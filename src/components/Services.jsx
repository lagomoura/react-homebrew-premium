import React from 'react';
import '../styles/Services.css';

export default function Services() {
	return (
		<>
			<section className='services py-5 text-center'>
				<div className='container d-flex justify-content-center flex-column'>
					<div className='row'>
						{/*single service*/}
						<div className='col-lg-4 col-md-12 col-sm-12 my-3'>
							<span className='services-icon'>
								<i className='fas fa-parachute-box' />
							</span>
							<h5 className='font-weight-bold text-uppercase text-white'>
								The best post-sale garanteed
							</h5>
							<p className='text-muted text-capitalize'>
								Check our rating on Google business
							</p>
						</div>
						{/*end of single service*/}
						{/*single service*/}
						<div className='col-lg-4 col-md-12 col-sm-12 my-3'>
							<span className='services-icon'>
								<i className='fas fa-phone-volume' />
							</span>
							<h5 className='font-weight-bold text-uppercase text-white'>
								Online support 24/7
							</h5>
							<p className='text-muted text-capitalize'>
								We will assist you with your inquiries
							</p>
						</div>
						{/*end of single service*/}
						{/*single service*/}
						<div className='col-lg-4 col-md-12 col-sm-12 my-3'>
							<span className='services-icon'>
								<i className='fas fa-dollar-sign' />
							</span>
							<h5 className='font-weight-bold text-uppercase text-white'>
								Money back garanteed
							</h5>
							<p className='text-muted text-capitalize'>
								100% refound for 30 days
							</p>
						</div>
						{/*end of single service*/}
					</div>
				</div>
			</section>
		</>
	);
}
