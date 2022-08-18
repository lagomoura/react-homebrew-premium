import React from 'react';
import '../styles/Navbar.css';
import Logo from '../img/logo.png';
import { ImCart } from 'react-icons/im';

export default function Navbar() {
	return (
		<>
			<header>
				<nav className='navbar navbar-expand-lg navbar-light bg-light'>
					<div className='container-fluid p-1 mx-2'>
						<a className='navbar-brand' href='#/'>
							<img src={Logo} alt='' />
							<div className='logo-text'>
								<b>HomeBrew Premium</b>
							</div>
						</a>
						<button
							className='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarSupportedContent'
							aria-controls='navbarSupportedContent'
							aria-expanded='false'
							aria-label='Toggle navigation'>
							<span className='navbar-toggler-icon' />
						</button>
					</div>
					<div className='container-fluid mx-0 d-flex flex-row justify-content-center'>
						<div
							className='collapse navbar-collapse p-3 m-0'
							id='navbarSupportedContent'>
							<ul className='navbar-nav text-center me-auto mb-2 mb-lg-0 mx-5'>
								<li className='nav-item mx-2 p-2'>
									<a className='nav-link' aria-current='page' href='#/'>
										<span className='nav-link-menu'>Home</span>
									</a>
								</li>
								<li className='nav-item mx-2 p-2'>
									<a className='nav-link' href='#/'>
										<span className='nav-link-menu'>Flash Sale</span>
									</a>
								</li>
								<li className='nav-item mx-2 p-2'>
									<a
										className='nav-link'
										href='#/'
										tabIndex={-1}
										aria-disabled='true'>
										<span className='nav-link-menu'>Store</span>
									</a>
								</li>
								<li className='nav-item mx-2 p-2'>
									<a
										className='nav-link'
										href='#/'
										tabIndex={-1}
										aria-disabled='true'>
										<span className='nav-link-menu'>New Products</span>
									</a>
								</li>
							</ul>
							<a
								href='#/'
								className='navbar-icon p-4 d-flex justify-content-center'>
								<span className='navbar-cart-icon'>
									<ImCart />
								</span>
							</a>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
}
