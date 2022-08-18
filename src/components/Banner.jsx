import React from 'react';
import '../styles/Banner.css';

export default function Banner() {
	return (
		<div className='banner d-flex align-items-center pl-3 pl-lg-5'>
			<div className='p-5'>
				<h1 className='text-capitalize text-slanted text-center mb-0'>
					world-wide
				</h1>
				<h1 className='text-uppercase fw-bolder'>homebrew supply 🍺</h1>
				<a
					href='#/'
					className='btn btn-yellow d-flex justify-content-center text-capitalize'>
					view products
				</a>
			</div>
		</div>
	);
}
