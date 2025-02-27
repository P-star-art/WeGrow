import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';

import { loadUser } from './redux/actions/authActions';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Profile from './components/Profile/Profile';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SellItem from './components/SellItem/SellItem';
import Crop from './components/BuyItem/Crops/Crop/Crop';
import BuyItem from './components/BuyItem/BuyItem';
import Donate from './components/Donate/Donate';
import OptimumCrop from './components/Predict/OptimumCrop';

function App() {
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadUser());
	}, [dispatch]);
	return (
		<div className="app">
			<Header history={history} />
			<Switch>
				<PrivateRoute exact path="/profile" component={Profile} />
				<PrivateRoute exact path="/sell" component={SellItem} />
				<PrivateRoute exact path="/donate" component={Donate} />
				<PrivateRoute exact path="/buy" component={BuyItem} />
				<Route exact path="/predict" component={OptimumCrop} />
				<Route exact path="/" component={Home} />
				<Route
					path="/auth/register"
					component={Register}
					history={history}
				/>
				<Route path="/auth/login" component={Login} history={history} />
				<Route path="/crop/:id" component={Crop} history={history} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
