import React from 'react';
import '../styles/ItemSale.css';

export default function ItemSale({ url_img, name, oldPrice, newPrice, id }) {
	return (
		<div className='container-fluid' key={id}>
			<div className='row my-3'>
				<div className='col-12 mx-auto my-3 text-center'>
					<h2 className='text-uppercase'>Flash Sale</h2>
					<p className='text-muted'>⚡ Up to 55% off - Check-it out ⚡</p>
				</div>
			</div>
			<div className='row'>
				<div className='col-12 mx-auto col-md-6 col-lg-4'>
					<div className='featured-container py-5'>
						<img src={url_img} alt='' />
						<span
							className='featured-search-icon'
							data-toggle='modal'
							data-target='#productModal'></span>
					</div>
          <a href="/#" className='featured-store-link text-capitalize'>add to cart</a>
				</div>
        <h6 className='text-capitalize text-center my-2'>{name}</h6>
        <h6 className='text-center'>
          <span className='text-muted old-price mx-2'>{oldPrice}</span>
          <span>{newPrice}</span>
        </h6>
			</div>
		</div>
	);
}
