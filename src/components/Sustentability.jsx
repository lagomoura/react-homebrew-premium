import React from 'react';
import '../styles/Sustentability.css';

export default function Sustentability() {
	return (
		<section>
			<div className='container-fluid'>
				<div className='row sustainability d-flex flex-column justify-content-center'>
					<div className='col-12 text-white sustainability-text text-slanted text-center'>
						<h3 className='text-uppercase fw-bold'>
							HomeBrew Premium supports Sustainability!
						</h3>
						<p className='text-capitalize fw-bold fs-5'>Join this idea and recycle 👍</p>
						<a
							href='https://www.recyclespot.org/'
							target='_blank'
							
              rel='noreferrer'
							className='text-weight-bold btn btn-yellow text-capitalize'>
							Recycle spots near you
								</a>{/*_blank dice para abrir esse link em uma nova aba*/}
					</div>
				</div>
			</div>
		</section>
	);
}
