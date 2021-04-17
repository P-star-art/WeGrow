import React from 'react';
import AuthenticatedToast from '../Auth/AuthenticatedToast/AuthenticatedToast';
import './Home.css';

function Home() {
	return (
		<div className="homePage">
			<div className="container">
				<div className="row">
					<div className="banner_p1 col-lg-6">
						<h1> <b>FARMER <span style={{ color: "#10B981" }}>TO</span> BUYER</b> </h1>
						<h2><b>IN A SNAP</b></h2>
					</div>
					<div className="banner_p2 col-lg-6">
						<img src="https://cdn2.vectorstock.com/i/thumb-large/79/86/farmer-and-crop-harvest-flat-composition-vector-20647986.jpg" />
					</div>
				</div>
			</div>

			<AuthenticatedToast />
		</div>
	);
}

export default Home;
